import { JSONContent } from '../types';
/**
 * Converts JSON content to HTML string or HTML Document object
 * @param content The JSON or JS object to convert to HTML Element/String
 * @param string A boolean to indicate if the output should be an HTML Element or String.
 * @returns {Promise<string | Document>}
 */
declare function JSONToHTML(content: JSONContent | string, string?: boolean): Promise<string | Document>;
export default JSONToHTML;
