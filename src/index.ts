/**
 * Convert HTML to JSON or Object
 * @author Yousuf Kalim
 */
import { DOMParser } from 'xmldom';

interface JSONContent {
  type: string;
  attributes?: object;
  content: Array<string | JSONContent>;
}
/**
 * @param element The HTML string or element to convert to JSON.
 * @param json A boolean to indicate if the output should be a JSON string.
 * @returns {Promise<unknown>}
 */
async function HTMLParser(element: Element | string, json = false): Promise<JSONContent | string> {
  return await new Promise((resolve, reject) => {
    try {
      const treeObject: any = {};
      let elementToParse: Element;

      // If string convert to document Node
      if (typeof element === 'string') {
        const parser = new DOMParser();
        const docNode = parser.parseFromString(element, 'text/xml');
        if (docNode.firstChild) {
          elementToParse = docNode.firstChild as Element;
        }
      } else {
        elementToParse = element;
      }

      // Recursively loop through DOM elements and assign properties to object
      const treeHTML = (element: Element, object = treeObject): void => {
        object.type = element.nodeName;
        const nodeList = element.childNodes;
        if (nodeList !== null) {
          if (nodeList.length) {
            object.content = [];
            for (let i = 0; i < nodeList.length; i++) {
              if (nodeList[i].nodeType === 3) {
                if (nodeList[i].nodeValue) {
                  object.content.push(nodeList[i].nodeValue);
                }
              } else {
                object.content.push({});
                treeHTML(nodeList[i] as Element, object.content[object.content.length - 1]);
              }
            }
          }
        }
        if (element.attributes !== null) {
          if (element.attributes.length) {
            object.attributes = {};
            for (let i = 0; i < element.attributes.length; i++) {
              object.attributes[element.attributes[i].nodeName] = element.attributes[i].nodeValue;
            }
          }
        }
      };

      // @ts-expect-error
      treeHTML(elementToParse);

      resolve(json ? JSON.stringify(treeObject) : treeObject);
    } catch (e) {
      reject(e);
    }
  });
}

export default HTMLParser;
