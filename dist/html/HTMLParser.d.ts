import { JSONContent } from '../types';
/**
 * Converts HTML Element or string to JSON
 * @param element The HTML string or element to convert to JSON.
 * @param json A boolean to indicate if the output should be a JSON string.
 * @returns {Promise<JSONContent | string>}
 */
declare function HTMLParser(element: Element | string, json?: boolean): Promise<JSONContent | string>;
export default HTMLParser;
