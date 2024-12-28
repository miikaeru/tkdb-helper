import {CATEGORIES} from './categories';

export const getTagDescription = (tag: string): string | undefined => {
  const allCategories = {
    ...CATEGORIES.wordMeaningPos,
    ...CATEGORIES.wordMeaningField,
    ...CATEGORIES.wordMeaningMisc,
    ...CATEGORIES.wordMeaningDial,
  } as Record<string, string>;
  const description = allCategories[tag];
  return description ?? undefined;
};

// export const formatPOSTags = (tags: string[]): string[] => {
//   const descriptions: string[] = [];

//   const verbTags = tags.filter(tag => tag.startsWith('v'));

//   const verbDescriptions = `Verb (${verbTags.map(tag => tagToDescription(tag)).join(', ')})`;
//   let verbDescriptionAdded = false;

//   for (const tag of tags) {
//     // for the first verb match, add the verb description
//     if (tag.startsWith('v') && !verbDescriptionAdded) {
//       descriptions.push(verbDescriptions);
//       verbDescriptionAdded = true;
//     } else {
//       descriptions.push(tag);
//     }
//   }

//   return descriptions;
// };
