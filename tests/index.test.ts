import { expect, test } from '@jest/globals';
import { HTMLToJSON, JSONToHTML } from '../src';
import { VOID_ELEMENTS } from '../src/json/const';

test('Test the parser by converting HTML to JSON', async () => {
  const element = '<div><ul><li>Hello <strong>World</strong></li></ul></div>';
  const result = await HTMLToJSON(element, true);

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

const testVoidElements = () => {
  const getElementWithVoidElement = (tag: string) => {
    return `{"type": "div", "content": [{ "type": "p", "content": ["Test"] }, { "type": "p", "content": [{ "type": "${tag}" }] }, { "type": "p", "content": ["Test1"] }]}`;
  };

  const getExpected = (tag: string) => {
    return `<p>Test</p><p><${tag}></p><p>Test1</p>`;
  };

  VOID_ELEMENTS.forEach(async (tag) => {
    test(`Test the parser by coverting JSON to Html with ${tag} void element`, async () => {
      const element = getElementWithVoidElement(tag);
      const expected = getExpected(tag);
      const result = await JSONToHTML(element, true);
      expect(result).toMatch(expected);
    });
  });
};

testVoidElements();
