/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "girdi-dedektifi",
    "title": "Girdi Dedektifi",
    "titleEn": "Input Detective",
    "grade": 6,
    "theme": "Yapay Zekâ",
    "code": "BTY.6.5.1",
    "outcome": "Yapay zekâ girdileri hakkında bilgi toplayabilme",
    "outcomeEn": "Gathering information about AI inputs",
    "duration": 146.8,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 16.4,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 16.4,
      "t1": 46,
      "name": "Girdi nedir?",
      "en": "What is input?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 46,
      "t1": 70.1,
      "name": "Hangi araç?",
      "en": "Which tool?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 70.1,
      "t1": 93.2,
      "name": "Bul ve doğrula",
      "en": "Find and verify",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 93.2,
      "t1": 110.2,
      "name": "Kaydet",
      "en": "Record it",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 110.2,
      "t1": 131.8,
      "name": "İstem güçlü mü?",
      "en": "Is the prompt strong?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s6",
      "t0": 131.8,
      "t1": 146.8,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
