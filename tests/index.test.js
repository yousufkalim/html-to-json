import { expect, test } from '@jest/globals';
import defaultAwesomeFunction, { awesomeFunction } from '../src/index.js';

test('Should test default awesome function', () => {
  const expectedVal = 'I am the Default Awesome Function, fellow comrade! - Yousuf';
  expect(defaultAwesomeFunction('Yousuf')).toMatch(expectedVal);
});

test('Should test awesome function', () => {
  const expectedVal = 'I am just an Awesome Function';
  expect(awesomeFunction()).toMatch(expectedVal);
});
