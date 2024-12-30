export type JLPT = keyof typeof CATEGORIES.jlpt;
export type KanjiGrade = keyof typeof CATEGORIES.kanjiGrade;
export type WordMeaningDial = keyof typeof CATEGORIES.wordMeaningDial;
export type WordMeaningField = keyof typeof CATEGORIES.wordMeaningField;
export type WordMeaningPos = keyof typeof CATEGORIES.wordMeaningPos;
export type WordMeaningMisc = keyof typeof CATEGORIES.wordMeaningMisc;
export type WordTranslationType = keyof typeof CATEGORIES.wordTranslationType;
export type WordFormInfo = keyof typeof CATEGORIES.wordFormInfo;

export const CATEGORIES = {
  jlpt: {
    1: 'JLPT N1',
    2: 'JLPT N2',
    3: 'JLPT N3',
    4: 'JLPT N4',
    5: 'JLPT N5',
  },
  kanjiGrade: {
    1: 'Kyouiku 1st grade',
    2: 'Kyouiku 2nd grade',
    3: 'Kyouiku 3rd grade',
    4: 'Kyouiku 4th grade',
    5: 'Kyouiku 5th grade',
    6: 'Kyouiku 6th grade',
    8: 'Jouyou',
    9: 'Jinmeiyou 1',
    10: 'Jinmeiyou 2',
  },
  wordMeaningDial: {
    bra: 'Brazilian', // Brazilian
    hob: 'Hokkaido-ben', // Hokkaido-ben
    ksb: 'Kansai-ben', // Kansai-ben
    ktb: 'Kantō-ben', // Kantou-ben
    kyb: 'Kyoto-ben', // Kyoto-ben
    kyu: 'Kyūshū-ben', // Kyuushuu-ben
    nab: 'Nagano-ben', // Nagano-ben
    osb: 'Ōsaka-ben', // Osaka-ben
    rkb: 'Ryūkyū-ben', // Ryuukyuu-ben
    thb: 'Tōhoku-ben', // Touhoku-ben
    tsb: 'Tosa-ben', // Tosa-ben
    tsug: 'Tsugaru-ben', // Tsugaru-ben
  },
  wordMeaningField: {
    agric: 'agriculture',
    anat: 'anatomical',
    archeol: 'archeology',
    archit: 'architecture',
    art: 'art',
    astron: 'astronomy',
    audvid: 'audiovisual',
    aviat: 'aviation',
    baseb: 'baseball',
    biochem: 'biochemistry',
    biol: 'biology',
    bot: 'botany',
    boxing: 'boxing',
    buddh: 'Buddhism',
    bus: 'business',
    cards: 'card games',
    chem: 'chemistry',
    chmyth: 'Chinese mythology',
    christn: 'Christianity',
    civeng: 'civil engineering',
    cloth: 'clothing',
    comp: 'computer',
    cryst: 'crystallography',
    dent: 'dentistry',
    ecol: 'ecology',
    econ: 'economics',
    elec: 'electricity',
    electr: 'electronics',
    embryo: 'embryology',
    engr: 'engineering',
    ent: 'entomology',
    figskt: 'figure skating',
    film: 'film',
    finc: 'finance',
    fish: 'fishing',
    food: 'food',
    gardn: 'gardening',
    genet: 'genetics',
    geogr: 'geography',
    geol: 'geology',
    geom: 'geometry',
    go: 'go (game)',
    golf: 'golf',
    gramm: 'grammar',
    grmyth: 'Greek mythology',
    hanaf: 'Hanafuda (game)',
    horse: 'horse racing',
    internet: 'internet',
    jpmyth: 'Japanese mythology',
    kabuki: 'kabuki',
    law: 'law',
    ling: 'linguistics',
    logic: 'logic',
    mA: 'martial arts',
    mahj: 'mahjong',
    manga: 'manga',
    math: 'mathematics',
    mech: 'mechanical engineering',
    med: 'medicine',
    met: 'meteorology',
    mil: 'military',
    min: 'mineralogy',
    mining: 'mining',
    motor: 'motorsport',
    music: 'music',
    noh: 'noh',
    ornith: 'ornithology',
    paleo: 'paleontology',
    pathol: 'pathology',
    pharm: 'pharmacology',
    phil: 'philosophy',
    photo: 'photography',
    physics: 'physics',
    physiol: 'physiology',
    politics: 'politics',
    print: 'printing',
    prowres: 'professional wrestling',
    psy: 'psychiatry',
    psyanal: 'psychoanalysis',
    psych: 'psychology',
    rail: 'railway',
    rommyth: 'Roman mythology',
    shinto: 'Shinto',
    shogi: 'shogi',
    ski: 'skiing',
    sports: 'sports',
    stat: 'statistics',
    stockm: 'stock market',
    sumo: 'sumo',
    surg: 'surgery',
    telec: 'telecommunications',
    tradem: 'trademark',
    tv: 'television',
    vet: 'veterinary',
    vidg: 'video games',
    zool: 'zoology',
  },
  wordTranslationType: {
    expl: 'explanatory',
    fig: 'figuratively',
    lit: 'literally',
    tm: 'trademark',
  },
  wordMeaningMisc: {
    mSl: 'Manga slang',
    netSl: 'Internet slang',
    onMim: 'Onomatopoeic or mimetic word',
    abbr: 'Abbreviation',
    arch: 'Archaic term',
    char: 'Character',
    chn: "Children's language",
    col: 'Colloquialism',
    company: 'Company',
    creat: 'Creature',
    dated: 'Dated term',
    dei: 'Deity',
    derog: 'Derogatory term',
    doc: 'Document',
    euph: 'Euphemistic term',
    ev: 'Event',
    fam: 'Familiar language',
    fem: 'Female-specific term or language',
    fict: 'Fiction',
    form: 'Formal or literary term',
    given: 'Given name',
    group: 'Group',
    hist: 'Historical term',
    hon: 'Honorific or respectful language (sonkeigo)',
    hum: 'Humble language (kenjougo)',
    id: 'Idiom or idiomatic expression',
    joc: 'Humorous or jocular term',
    leg: 'Legendary term or reference',
    male: 'Male-specific term or language',
    myth: 'Mythology',
    obj: 'Object',
    obs: 'Obsolete term',
    organization: 'Organization name',
    person: 'Person’s name',
    place: 'Place name',
    poet: 'Poetical term',
    pol: 'Polite language (teineigo)',
    product: 'Product name',
    proverb: 'Proverb or proverbial expression',
    quote: 'Quotation',
    rare: 'Rare term',
    sens: 'Sensitive term',
    serv: 'Service',
    ship: 'Ship name',
    surname: 'Surname',
    sl: 'Slang',
    uk: 'Usually written in kana',
    unclass: 'Unclassified name',
    vulg: 'Vulgar expression or word',
    work: 'Name of a work (art, literature, music, etc.)',
    yoji: 'Yojijukugo (four-character idiom)',
  },
  wordMeaningPos: {
    adjF: 'Pre-noun adjective', // noun or verb acting prenominally
    adjI: 'Adjective (い)', // adjective (keiyoushi)
    adjIx: 'Adjective (よい/いい)', // adjective (keiyoushi) - yoi/ii class
    adjKu: 'Adjective (く)', // "ku" adjective (archaic)
    adjNa: 'Adjective (な)', // adjectival nouns or quasi-adjectives (keiyodoshi)
    adjNari: 'Adjective (なり)', // archaic/formal form of na-adjective
    adjNo: 'Adjective (の)', // nouns which may take the genitive case particle "no"
    adjPn: 'Pre-noun adjective', // pre-noun adjectival (rentaishi)
    adjShiku: 'Adjective (しく)', // "shiku" adjective (archaic)
    adjT: 'Adjective (たる)', // "taru" adjective
    adv: 'Adverb', // adverb (fukushi)
    advTo: 'Adverb taking と particle', // adverb taking the "to" particle
    aux: 'Auxiliary', // auxiliary
    auxAdj: 'Auxiliary adjective', // auxiliary adjective
    auxV: 'Auxiliary verb', // auxiliary verb
    conj: 'Conjunction', // 'conjunction'
    cop: 'Copula', // copula
    ctr: 'Counter', // counter
    exp: 'Expression', // expressions
    int: 'Interjection', // interjection (kandoushi)
    n: 'Noun', // noun (common) (futsuumeishi)
    nPref: 'Noun (prefix)', // noun, used as a prefix
    nSuf: 'Noun (suffix)', // noun, used as a suffix
    num: 'Numeric', // numeric
    pn: 'Pronoun', // pronoun
    pref: 'Prefix', // prefix
    prt: 'Particle', // particle
    suf: 'Suffix', // suffix
    unc: 'Unclassified', // unclassified
    v1: 'Verb (1-dan)', // ichidan verb
    v1S: 'Verb (1-dan, くれる)', // ichidan verb - kureru special class
    v2aS: 'Verb (2-dan, う)', // nidan verb with "u" ending (archaic)
    v2bK: 'Verb (2-dan, ぶ, formal)', // nidan verb (upper class) with "bu" ending (archaic)
    v2dS: 'Verb (2-dan, づ, informal)', // nidan verb (lower class) with "dzu" ending (archaic)
    v2gK: 'Verb (2-dan, ぐ, formal)', // nidan verb (upper class) with "gu" ending (archaic)
    v2gS: 'Verb (2-dan, ぐ, informal)', // nidan verb (lower class) with "gu" ending (archaic)
    v2hK: 'Verb (2-dan, ふ, formal)', // nidan verb (upper class) with "hu/fu" ending (archaic)
    v2hS: 'Verb (2-dan, ふ, informal)', // nidan verb (lower class) with "hu/fu" ending (archaic)
    v2kK: 'Verb (2-dan, く, formal)', // nidan verb (upper class) with "ku" ending (archaic)
    v2kS: 'Verb (2-dan, く, informal)', // nidan verb (lower class) with "ku" ending (archaic)
    v2mS: 'Verb (2-dan, む, informal)', // nidan verb (lower class) with "mu" ending (archaic)
    v2nS: 'Verb (2-dan, ぬ, informal)', // nidan verb (lower class) with "nu" ending (archaic)
    v2rK: 'Verb (2-dan, る, formal)', // nidan verb (upper class) with "ru" ending (archaic)
    v2rS: 'Verb (2-dan, る, informal)', // nidan verb (lower class) with "ru" ending (archaic)
    v2sS: 'Verb (2-dan, す, informal)', // nidan verb (lower class) with "su" ending (archaic)
    v2tK: 'Verb (2-dan, つ, formal)', // nidan verb (upper class) with "tsu" ending (archaic)
    v2tS: 'Verb (2-dan, つ, informal)', // nidan verb (lower class) with "tsu" ending (archaic)
    v2wS: 'Verb (2-dan, う, informal)', // nidan verb (lower class) with "u" ending and "we" conjugation (archaic)
    v2yK: 'Verb (2-dan, ゆ, formal)', // nidan verb (upper class) with "yu" ending (archaic)
    v2yS: 'Verb (2-dan, ゆ, informal)', // nidan verb (lower class) with "yu" ending (archaic)
    v2zS: 'Verb (2-dan, ず, informal)', // nidan verb (lower class) with "zu" ending (archaic)
    v4b: 'Verb (4-dan, ぶ)', // yodan verb with "bu" ending (archaic)
    v4g: 'Verb (4-dan, ぐ)', // yodan verb with "gu" ending (archaic)
    v4h: 'Verb (4-dan, ふ)', // yodan verb with "hu/fu" ending (archaic)
    v4k: 'Verb (4-dan, く)', // yodan verb with "ku" ending (archaic)
    v4m: 'Verb (4-dan, む)', // yodan verb with "mu" ending (archaic)
    v4r: 'Verb (4-dan, る)', // yodan verb with "ru" ending (archaic)
    v4s: 'Verb (4-dan, す)', // yodan verb with "su" ending (archaic)
    v4t: 'Verb (4-dan, つ)', // yodan verb with "tsu" ending (archaic)
    v5aru: 'Verb (5-dan, ある)', // godan verb - -aru special class
    v5b: 'Verb (5-dan, ぶ)', // godan verb with "bu" ending
    v5g: 'Verb (5-dan, ぐ)', // godan verb with "gu" ending
    v5k: 'Verb (5-dan, く)', // godan verb with "ku" ending
    v5kS: 'Verb (5-dan, 行く)', // godan verb - iku/yuku special class
    v5m: 'Verb (5-dan, む)', // godan verb with "mu" ending
    v5n: 'Verb (5-dan, ぬ)', // godan verb with "nu" ending
    v5r: 'Verb (5-dan, る)', // godan verb with "ru" ending
    v5rI: 'Verb (5-dan, る irregular)', // godan verb with "ru" ending (irregular verb)
    v5s: 'Verb (5-dan, す)', // godan verb with "su" ending
    v5t: 'Verb (5-dan, つ)', // godan verb with "tsu" ending
    v5u: 'Verb (5-dan, う)', // godan verb with "u" ending
    v5uS: 'Verb (5-dan, う special)', // godan verb with "u" ending (special class)
    vi: 'Intransitive verb', // intransitive verb
    vk: 'Verb (くる)', // kuru verb - special class
    vn: 'Irregular nu verb', // irregular nu verb
    vr: 'Irregular ru verb', // irregular ru verb, plain form ends with "ri"
    vs: 'Suru verb', // noun or participle which takes the aux. verb suru
    vsC: 'Su verb (す)', // su verb - precursor to the modern suru
    vt: 'Transitive verb', // transitive verb
    vz: 'Ichidan verb (ずる)', // ichidan verb - zuru verb (alternative form of -jiru verbs)
    vsI: 'Suru verb (included)', // suru verb - included
    vsS: 'Suru verb (special)', // suru verb - special class
  },
  wordFormInfo: {
    iK: 'irregular kanji', // word containing irregular kanji usage
    io: 'irregular okurigana', // irregular okurigana usage
    oK: 'out-dated kanji', // word containing out-dated kanji
    ik: 'irregular kana', // word containing irregular kana usage
    rK: 'rarely used kanji', // rarely used kanji form
    ateji: 'ateji', // ateji (phonetic) reading
    gikun: 'gikun', // gikun (meaning as reading) or jukujikun (special kanji reading)
    ok: 'out-dated kana', // out-dated or obsolete kana usage
    rk: 'rarely used kana', // rarely used kana form
    sk: 'search only kana',
    sK: 'search only kanji',
  },
};
