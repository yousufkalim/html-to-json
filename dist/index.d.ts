/**
 * Convert HTML to JSON or JSON to HTML
 * The main module that exports the `HTMLParser` function and `JSONToHTML` function,
 * along with the `JSONType` type.
 *
 * @author Yousuf Kalim
 */
import { HTMLParser as HTMLToJSON } from './html';
import { JSONToHTML } from './json';
import { JSONContent } from './types';
/**
 * The `HTMLToJSON` function converts an HTML element or HTML string into a JSON object or string.
 */
export { HTMLToJSON };
/**
 * The `JSONToHTML` function converts a JSON object or string into an HTML string or document element.
 */
export { JSONToHTML };
/**
 * The `JSONType` type is used to define the type of the JSON object used in the library.
 */
export declare type JSONType = JSONContent;
