import {getTagDescription} from './helper';

test('getTagDescription returns the correct description for a given tag', () => {
  expect(getTagDescription('n')).toBe('Noun');
});
