/**
 * Convert HTML to JSON or Object
 * @author Yousuf Kalim
 */

/**
 * @param element The HTML string or element to convert to JSON.
 * @param json A boolean to indicate if the output should be a JSON string.
 * @returns {Promise<unknown>}
 */
function HTMLParser(element, json = false) {
  return new Promise((resolve, reject) => {
    try {
      let treeObject = {};
      let parser;
      let docNode;

      // If string convert to document Node
      if (typeof element === 'string') {
        parser = new DOMParser();
        docNode = parser.parseFromString(element, 'text/xml');
        element = docNode.firstChild;
      }

      //Recursively loop through DOM elements and assign properties to object
      const treeHTML = (element, object) => {
        object['type'] = element.nodeName;
        let nodeList = element.childNodes;
        if (nodeList !== null) {
          if (nodeList.length) {
            object['content'] = [];
            for (let i = 0; i < nodeList.length; i++) {
              if (nodeList[i].nodeType === 3) {
                object['content'].push(nodeList[i].nodeValue);
              } else {
                object['content'].push({});
                treeHTML(nodeList[i], object['content'][object['content'].length - 1]);
              }
            }
          }
        }
        if (element.attributes !== null) {
          if (element.attributes.length) {
            object['attributes'] = {};
            for (let i = 0; i < element.attributes.length; i++) {
              object['attributes'][element.attributes[i].nodeName] =
                element.attributes[i].nodeValue;
            }
          }
        }
      };

      treeHTML(element, treeObject);

      resolve(json ? JSON.stringify(treeObject) : treeObject);
    } catch (e) {
      reject(e);
    }
  });
}

export default HTMLParser;
