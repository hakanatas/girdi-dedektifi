/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 8.5, tr: "Yapay zekâ neden bazen tuhaf cevaplar veriyor?", en: "Why does AI sometimes give strange answers?",
      note: "Karo bir yapay zekâ aracına \"Bana bir şey anlat\" yazdı. Aldığı cevap hiç işine yaramadı. Sorun nerede?" },
    { scene: 1, start: 9.3, end: 15, tr: "Cevap, verdiğimiz girdiye bağlı!", en: "The answer depends on the input we give!",
      note: "Yapay zekânın ne ürettiği, ona ne verdiğimize bağlıdır. Girdileri araştıralım." },
    { scene: 2, start: 17.9, end: 23.6, tr: "Girdi: yapay zekâya verilen her şey", en: "Input: everything we give to an AI",
      note: "Girdi, yapay zekânın öğrenmesi ve sonuç üretmesi için ona verilen her şeydir." },
    { scene: 2, start: 24.4, end: 30.1, tr: "Eğitim verisi: model bundan öğrenir", en: "Training data: what the model learns from",
      note: "Bir model 100 bin yerine 500 bin etiketli bitki fotoğrafıyla eğitilirse gördüğü bitkiyi daha doğru tanır." },
    { scene: 2, start: 30.9, end: 36.5, tr: "İstem: bizim yazdığımız soru", en: "Prompt: the question we write",
      note: "Bir yapay zekâ aracına yazdığımız soru ya da görev de bir girdidir. Buna istem denir." },
    { scene: 2, start: 37.4, end: 44.6, tr: "İyi girdi: doğru, çeşitli, güncel, net", en: "Good input: correct, varied, current, clear",
      note: "İyi girdiler doğru etiketlenmiş, farklı kaynaklardan, güncel, net ve gereksiz bilgilerden arındırılmış olmalıdır." },
    { scene: 3, start: 47.5, end: 53.6, tr: "Araştırmak için hangi araçları kullanalım?", en: "Which tools should we research with?",
      note: "Yapay zekâ girdileri hakkında bilgi toplamak için hangi araçları kullanacağımızı belirleyelim." },
    { scene: 3, start: 54.5, end: 60.4, tr: "Kitaplar, kurum siteleri, ansiklopediler", en: "Books, official sites, encyclopaedias",
      note: "Ders kitabı, e-kitap, üniversite ve kurum siteleri ile dijital ansiklopediler güvenilir kaynaklardır." },
    { scene: 3, start: 61.3, end: 68.8, tr: "Yapay zekâ, video ve sosyal medya: kontrol et", en: "AI, videos and social media: check first",
      note: "Yapay zekâ sohbet araçları, video yorumları ve sosyal medya hızlıdır ama yanlış bilgi de içerebilir. Mutlaka kontrol ederiz." },
    { scene: 4, start: 71.5, end: 77.2, tr: "Anahtar kelimelerle ara", en: "Search with keywords",
      note: "Arama motoruna anahtar kelimelerimizi yazarız." },
    { scene: 4, start: 78, end: 83.7, tr: "Tam ifadeyle aramayı daralt", en: "Narrow it with the exact phrase",
      note: "Tırnak işaretiyle tam ifadeyi ararız; sonuçlar konumuza odaklanır." },
    { scene: 4, start: 84.5, end: 91.8, tr: "Bilgiyi farklı kaynaklarla karşılaştır", en: "Compare the facts across sources",
      note: "Üniversite sitesi ve ansiklopedi aynı bilgiyi veriyor: model, eğitim verisinden öğrenir. Forumdaki \"YZ her şeyi zaten biliyor\" iddiası ise yanlış." },
    { scene: 5, start: 94.6, end: 101.3, tr: "Kendi cümlelerinle yaz, kaynağı ekle", en: "Write it in your own words and add the source",
      note: "Bulduğumuz bilgiyi kopyalamak yerine kendi cümlelerimizle yazarız ve kaynağın adresini ekleriz." },
    { scene: 5, start: 102.1, end: 108.8, tr: "Tarihi yaz, dijital deftere kaydet", en: "Add the date and save it digitally",
      note: "Bilgiye ne zaman ulaştığımızı yazarız; bilgiler zamanla değişebilir. Sonra dijital not defterimize kaydederiz." },
    { scene: 6, start: 111.6, end: 117.3, tr: "\"Bana bir şey anlat\"", en: "\"Tell me something\"",
      note: "\"Bana bir şey anlat\" istemi çok belirsiz. Yapay zekâ neyi, kime, nasıl anlatacağını bilemez. Zayıf." },
    { scene: 6, start: 118.1, end: 123.9, tr: "Net, hedefli ve biçimi belli bir istem", en: "A clear prompt with an audience and format",
      note: "\"6. sınıflar için deprem çantasında olması gereken 5 şeyi madde madde yaz.\" Konu, hedef kitle ve biçim belli. Güçlü." },
    { scene: 6, start: 124.8, end: 130.5, tr: "İsteme kişisel bilgi eklemek", en: "Adding personal details to a prompt",
      note: "İsteme adresimizi ya da okul numaramızı yazmak gereksizdir ve güvenli değildir. Girdi sade olmalı." },
    { scene: 7, start: 133.3, end: 139, tr: "Aklında kalsın: iyi girdi, iyi sonuç", en: "Remember: good input, good output",
      note: "Aklında kalsın: yapay zekâ ne kadar iyi girdi alırsa o kadar iyi sonuç üretir." },
    { scene: 7, start: 139.8, end: 145.5, tr: "Girdiyi sen hazırlarsın!", en: "You prepare the input!",
      note: "Girdiyi hazırlayan sensin; dikkatli ve net ol!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
