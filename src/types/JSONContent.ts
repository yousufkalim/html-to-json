/**
 * JSONContent Interface
 * @author Yousuf Kalim
 */
export default interface JSONContent {
  type: string;
  attributes?: object;
  content: Array<string | JSONContent>;
}
