import { expect, test } from '@jest/globals';
import { HTMLParser, JSONToHTML } from '../src';

test('Test the parser by converting HTML to JSON', async () => {
  const element = '<div><ul><li>Hello <strong>World</strong></li></ul></div>';
  const result = await HTMLParser(element, true);

  const expected =
    '{"type":"div","content":[{"type":"ul","content":[{"type":"li","content":["Hello ",{"type":"strong","content":["World"]}]}]}]}';
  expect(result).toMatch(expected);
});

test('Test the parser by converting JSON to HTML', async () => {
  const element =
    '{"type":"div","content":[{"type":"ul","content":[{"type":"li","content":["Hello ",{"type":"strong","content":["World"]}]}]}]}';
  const result = await JSONToHTML(element, true);

  const expected = '<div><ul><li>Hello <strong>World</strong></li></ul></div>';

  expect(result).toMatch(expected);
});
