// Function to assert type
export const assertTKDB = (data: unknown): TKDB => {
  return data as TKDB;
};

export interface TKDB {
  version: string;
  dateOfCreation: Date;
  keywords: Keywords;
  words: Word[];
  kanjis: Kanji[];
  radicals: Radical[];
}

// Shared

export type JLPT = 'n1' | 'n2' | 'n3' | 'n4' | 'n5';

// Keywords

export interface Keywords {
  jlpt: Record<string, string>;
  kanjiGrade: Record<string, string>;
  wordMeaningDial: Record<string, string>;
  wordMeaningField: Record<string, string>;
  wordMeaningGlossType: Record<string, string>;
  wordMeaningMisc: Record<string, string>;
  wordMeaningPos: Record<string, string>;
  wordKanjiInfo: Record<string, string>;
  wordKanaInfo: Record<string, string>;
}

// Radical

export interface Radical {
  id: string;
  radical: string;
  kradical?: string | undefined;
  strokecount: number;
  number?: number | undefined;
  meanings?: string[] | undefined;
  readings?: string[] | undefined;
  readingsRomaji?: string[] | undefined;
  variants?: string[] | undefined;
  variantOf?: string | undefined;
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
  grade?: number | undefined;
  jlpt?: JLPT | undefined;
  antonyms?: string[] | undefined;
  lookalikes?: string[] | undefined;
  synonyms?: string[] | undefined;
  radicals?: string[] | undefined; // radicals from kradfilex
}

export interface KanjiStroke {
  path: string;
  x: string;
  y: string;
}

export interface KanjiComposition {
  element: string;
  isRadical?: boolean | undefined;
  isKanji?: boolean | undefined;
  composition?: KanjiComposition[] | undefined;
}

// Word

export interface Word {
  id: string;
  forms: WordForm[];
  meanings: WordMeaning[];
  romajiReadings?: string[] | undefined;
  jlpt?: JLPT | undefined;
  common?: boolean | undefined;
  frequency?: number | undefined;
}

export interface WordForm {
  kana: string;
  romaji?: string | undefined;
  kanji?: string | undefined;
  furigana?: WordFurigana[] | undefined;
  characters?: string[] | undefined;
  jlpt?: JLPT | undefined;
  common?: boolean | undefined;
  frequency?: number | undefined;
  irregularKanji?: boolean | undefined;
  irregularReading?: boolean | undefined;
  irregularOkurigana?: boolean | undefined;
  rarelyUsedKanji?: boolean | undefined;
  outdatedReading?: boolean | undefined;
  outdatedKanji?: boolean | undefined;
  falseReading?: boolean | undefined;
  ateji?: boolean | undefined;
}

export interface WordFurigana {
  ruby: string;
  rt?: string | undefined;
}

export interface WordMeaning {
  translations?: string[] | undefined;
  wordClasses?: string[] | undefined;
  fieldCategories?: string[] | undefined;
  dialectCategories?: string[] | undefined;
  miscCategories?: string[] | undefined;
  informations?: string[] | undefined;
  formRestricions?: string[] | undefined;
  languageSources?: WordLanguageSource[] | undefined;
}

export interface WordLanguageSource {
  description: string;
  language: string;
  waseieigo?: boolean | undefined;
  part?: boolean | undefined;
}
