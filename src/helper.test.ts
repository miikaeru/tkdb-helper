import {WordForm, WordMeaning} from './assert';
import {
  assignMeaningsToForm,
  FormMeanings,
  groupMeaningsByCategories,
} from './helper';

test('Group meanings by category set', () => {
  const meanings: WordMeaning[] = [
    {
      translations: ['tree', 'maple'],
      informations: ['a tree is green'],
      fieldCategories: ['nature'],
      wordClasses: ['Noun'],
      miscCategories: ['food'],
    },
    // Note in below object wordClasses is missing
    // JMdict seems to exclude word classes if previous object has the same word classes
    {
      translations: ['oak'],
      fieldCategories: ['nature'],
      miscCategories: ['food'],
    },
    {
      translations: ['trii'],
      dialectCategories: ['Hakata-ben'],
      fieldCategories: ['nature'],
      wordClasses: ['Noun', 'Anglizism'],
      miscCategories: ['food'],
      languageSources: [{language: 'eng', description: 'Imported'}],
    },
  ];

  const expected = [
    {
      categories: ['Noun', 'nature', 'food'],
      meanings: [
        {translations: ['tree', 'maple'], informations: ['a tree is green']},
        {translations: ['oak']},
      ],
    },
    {
      categories: ['Noun', 'Anglizism', 'Hakata-ben', 'nature', 'food'],
      meanings: [
        {
          translations: ['trii'],
          languageSources: [{language: 'eng', description: 'Imported'}],
        },
      ],
    },
  ];

  const result = groupMeaningsByCategories(meanings);

  expect(result).toEqual(expected);
});

describe('Assign meanings to form', () => {
  test('Assign meanings to form without restriction', () => {
    const form: WordForm = {
      script: 'りんご',
    };
    const meanings: WordMeaning[] = [
      {translations: ['Apple']},
      {translations: ['Apfel'], formRestricions: ['林檎']},
    ];

    const expected: FormMeanings = {
      form: {script: 'りんご'},
      meanings: [{translations: ['Apple']}],
    };

    const result = assignMeaningsToForm(form, meanings);

    expect(result).toEqual(expected);
  });

  test('Assign meanings to form with restriction', () => {
    const form: WordForm = {
      script: '林檎',
    };
    const meanings: WordMeaning[] = [
      {translations: ['Apple']},
      {translations: ['Apfel'], formRestricions: ['林檎']},
    ];

    const expected: FormMeanings = {
      form: {script: '林檎'},
      meanings: [
        {translations: ['Apple']},
        {translations: ['Apfel'], formRestricions: ['林檎']},
      ],
    };

    const result = assignMeaningsToForm(form, meanings);

    expect(result).toEqual(expected);
  });
});
