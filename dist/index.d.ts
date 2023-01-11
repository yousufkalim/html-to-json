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
declare function HTMLParser(element: Element | string, json?: boolean): Promise<JSONContent | string>;
export default HTMLParser;
