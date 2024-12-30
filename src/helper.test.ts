import {getMeaningCatDescr} from './helper';

test('getTagDescription returns the correct description for a given tag', () => {
  expect(getMeaningCatDescr('n')).toBe('Noun');
});
