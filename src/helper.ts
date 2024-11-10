import {Keywords, Word, WordForm, WordMeaning} from './assert';

export interface WordRefubrished extends Word {
  formCategoriesMeanings: FormCategoriesMeanings[];
}

export interface FormCategoriesMeanings {
  form: WordForm;
  categoriesMeanings?: CategoriesMeanings[] | undefined; // meanings by category
}

export interface CategoriesMeanings {
  categories?: string[] | undefined;
  meanings: WordMeaning[];
}

export interface FormMeanings {
  form: WordForm;
  meanings?: WordMeaning[] | undefined;
}

export const areCategoriesEqual = (
  categories1: string[],
  categories2: string[]
): boolean => {
  // Compare two arrays of categories for equality
  if (categories1.length !== categories2.length) return false;
  return categories1.every(
    (category, index) => category === categories2[index]
  );
};

export const groupMeaningsByCategories = (
  meanings: WordMeaning[]
): CategoriesMeanings[] => {
  // Array to store the final grouped meanings
  const categoriesMeanings: CategoriesMeanings[] = [];

  // Variables to hold the current set of categories and meanings
  let currentCategories: string[] | undefined;
  let currentMeanings: WordMeaning[] = [];

  // Variable to track the last used word classes if not present in the current meaning
  let lastWordClasses: string[] | undefined;

  // Loop through each meaning to group them by category set
  for (const meaning of meanings) {
    // Collect all categories from the current meaning, falling back to the last word classes if necessary
    const categories = [
      ...(meaning.wordClasses ?? lastWordClasses ?? []),
      ...(meaning.dialectCategories ?? []),
      ...(meaning.fieldCategories ?? []),
      ...(meaning.miscCategories ?? []),
    ];

    // Update lastWordClasses if the current meaning has word classes defined
    if (meaning.wordClasses) {
      lastWordClasses = meaning.wordClasses;
    }

    // Remove category information from the meaning object to avoid redundancy
    delete meaning.wordClasses;
    delete meaning.dialectCategories;
    delete meaning.fieldCategories;
    delete meaning.miscCategories;

    // If there are no current categories, initialize them with the categories of the first meaning
    if (!currentCategories) {
      currentCategories = categories;
      currentMeanings = [meaning];
    } else if (areCategoriesEqual(currentCategories, categories)) {
      // If the current meaning's categories match the currentCategories, add it to currentMeanings
      currentMeanings.push(meaning);
    } else {
      // If categories do not match, save the current group and start a new group
      categoriesMeanings.push({
        categories: currentCategories,
        meanings: currentMeanings,
      });
      currentCategories = categories;
      currentMeanings = [meaning];
    }
  }

  // After looping, push the final group if there are any remaining meanings
  if (currentCategories && currentMeanings.length > 0) {
    categoriesMeanings.push({
      categories: currentCategories,
      meanings: currentMeanings,
    });
  }

  // Return the grouped meanings by category sets
  return categoriesMeanings;
};

export const assignMeaningsToForm = (
  form: WordForm,
  meanings?: WordMeaning[] | undefined
): FormMeanings => {
  const validMeanings = meanings?.filter(meaning => {
    const isInvaldDueRestriction =
      meaning.formRestricions?.includes(form.kanji ?? '') ?? true;

    return isInvaldDueRestriction;
  });

  return {
    form,
    meanings: validMeanings,
  };
};

export const createRefubrishedWord = (word: Word): WordRefubrished => {
  const formCategoriesMeanings: FormCategoriesMeanings[] = word.forms.map(
    form => {
      const assignedMeanings = assignMeaningsToForm(form, word.meanings);
      const categoriesMeanings = assignedMeanings.meanings
        ? groupMeaningsByCategories(assignedMeanings.meanings)
        : undefined;

      return {
        form,
        categoriesMeanings,
      };
    }
  );

  return {
    ...word,
    formCategoriesMeanings,
  };
};

export const getCategory = (
  lookup: string,
  keywords: Keywords
): string | undefined => {
  const categories = {
    ...keywords.wordMeaningPos,
    ...keywords.wordMeaningMisc,
    ...keywords.wordMeaningField,
    ...keywords.wordMeaningDial,
  };

  return categories[lookup];
};
