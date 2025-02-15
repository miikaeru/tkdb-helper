import {
  JLPT,
  KanjiGrade,
  WordFormInfo,
  WordMeaningDial,
  WordMeaningField,
  WordMeaningMisc,
  WordMeaningPos,
  WordTranslationType,
} from './categories';

// Function to assert type
export const assertTKDB = (data: unknown): TKDB => {
  return data as TKDB;
};

export interface TKDB {
  version: string;
  dateOfCreation: Date;
  categories: Categories;
  words: Word[];
  kanjis: Kanji[];
  radicals: Radical[];
}

// Categories

export interface Categories {
  jlpt: Record<JLPT, string>;
  kanjiGrade: Record<KanjiGrade, string>;
  wordMeaningDial: Record<WordMeaningDial, string>;
  wordMeaningField: Record<WordMeaningField, string>;
  wordMeaningPos: Record<WordMeaningPos, string>;
  wordMeaningMisc: Record<WordMeaningMisc, string>;
  wordTranslationType: Record<WordTranslationType, string>;
  wordFormInfo: Record<WordFormInfo, string>;
}

// Radical

export interface Radical {
  id: string;
  literal: string;
  strokecount: number;
  number?: number | undefined;
  meanings?: string[] | undefined;
  readings?: string[] | undefined;
  readingsRomaji?: string[] | undefined;
  variants?: string[] | undefined;
  variantOf?: string | undefined;
  keyword?: string | undefined;
  mnemonic?: string | undefined;
}

// Kanji

export interface Kanji {
  id: string;
  literal: string;
  strokecount: number;
  strokes?: KanjiStroke[] | undefined;
  composition?: KanjiComposition[] | undefined;
  on?: string[] | undefined;
  onRomaji?: string[] | undefined;
  kun?: string[] | undefined;
  kunRomaji?: string[] | undefined;
  kunOku?: string[] | undefined; // includes okurigana
  nanori?: string[] | undefined;
  meanings?: string[] | undefined;
  frequency?: number | undefined; // frequency from kanjidic2
  frequency2?: number | undefined; // frequency from kanjium
  grade?: KanjiGrade | undefined;
  jlpt?: JLPT | undefined;
  antonyms?: string[] | undefined;
  lookalikes?: string[] | undefined;
  synonyms?: string[] | undefined;
  radicals?: string[] | undefined; // radicals from kradfilex
  keyword?: string | undefined;
  mnemonic?: string | undefined;
}

export interface KanjiStroke {
  path: string;
  x: string;
  y: string;
}

export type KanjiCompositionType = 'kanji' | 'radical';

export interface KanjiComposition {
  element: string;
  type: KanjiCompositionType;
  composition?: KanjiComposition[] | undefined;
}

// Word

export interface Word {
  id: number;
  forms: WordForm[];
  meanings: WordMeaning[];
  meaningsSummary: WordMeaningTranslation[];
  searchWords?: string[] | undefined; // wrong forms but used for search purposes
}

export interface WordForm {
  wordId: number;
  id: string;
  kana: string;
  kanji?: string | undefined;
  furigana?: WordFurigana[] | undefined;
  romaji?: string | undefined;
  usedKanji?: string[] | undefined;
  jlpt?: JLPT | undefined;
  common?: boolean | undefined;
  frequency?: number | undefined;
  unusual?: boolean | undefined;
  informations?: WordFormInfo[] | undefined;
  meanings: WordMeaning[];
}

export interface WordFurigana {
  ruby: string;
  rt?: string | undefined;
}

export interface WordMeaning {
  id: string;
  restrictions?: string[] | undefined;
  translations: WordMeaningTranslation[];
  posCategories?: WordMeaningPos[] | undefined;
  fieldCategories?: WordMeaningField[] | undefined;
  dialectCategories?: WordMeaningDial[] | undefined;
  miscCategories?: WordMeaningMisc[] | undefined;
  informations?: string[] | undefined;
  languageSources?: WordLanguageSource[] | undefined;
}

export interface WordMeaningTranslation {
  text: string;
  type?: WordTranslationType | undefined;
}

export interface WordLanguageSource {
  description: string;
  language: string;
  waseieigo?: boolean | undefined;
  part?: boolean | undefined;
}
