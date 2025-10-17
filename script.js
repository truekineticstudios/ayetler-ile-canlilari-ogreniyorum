const questions = {
  1: [
    { verse: "Toprağı eşeleyen, yerin altına yuva kuran… (Neml 18)", options: ["Fare", "Solucan", "Karınca", "Köstebek"], answer: "Karınca" },
    { verse: "Kanat çırpanlar gökyüzünde saf saf dizilir… (Mülk 19)", options: ["Kelebek", "Yarasa", "Kuş", "Arı"], answer: "Kuş" },
    { verse: "Gece sessizliğinde hareket eden, iz bırakmayan… (Neml 18)", options: ["Kirpi", "Yılan", "Baykuş", "Kedi"], answer: "Yılan" },
    { verse: "Sürü halinde hareket eden, çayırlarda otlayan… (Nahl 5)", options: ["İnek", "Tavşan", "Koyun", "At"], answer: "Koyun" },
    { verse: "Yük taşıyan, çölde sabırla yürüyen… (Gâşiye 17)", options: ["Fil", "Deve", "At", "Eşek"], answer: "Deve" },
    { verse: "Küçük yapısıyla büyük işler yapan… (Nahl 68)", options: ["Karınca", "Arı", "Sinek", "Kelebek"], answer: "Arı" },
    { verse: "Su kenarında yaşayan, sıçrayarak ilerleyen… (Bakara 74)", options: ["Fare", "Kurbağa", "Yengeç", "Kertenkele"], answer: "Kurbağa" },
    { verse: "Geceleri avlanan, sessizce süzülen… (En'am 97)", options: ["Tilki", "Baykuş", "Yarasa", "Kedi"], answer: "Baykuş" },
    { verse: "Kendi ağıyla tuzak kuran… (Ankebut 41)", options: ["Kuş", "Karınca", "Arı", "Örümcek"], answer: "Örümcek" },
    { verse: "Suda yaşayan, solungaçla nefes alan… (Nur 45)", options: ["Kaplumbağa", "Balık", "Kurbağa", "Yunus"], answer: "Balık" },
    { verse: "Kışın yuvasına çekilen, yazın aktif olan… (Nahl 5)", options: ["Kirpi", "Ayı", "Fare", "Köstebek"], answer: "Ayı" },
    { verse: "Kuyruğuyla denge sağlayan, ağaçlara tırmanan… (Sad 71)", options: ["Koala", "Maymun", "Sincap", "Kedi"], answer: "Sincap" },
    { verse: "Küçük kanatlarıyla uzun mesafeler uçan… (Nahl 69)", options: ["Kuş", "Sinek", "Arı", "Kelebek"], answer: "Kelebek" },
    { verse: "Yüksekten atlayan, güçlü arka bacaklara sahip… (Bakara 22)", options: ["Zebra", "Tavşan", "Ceylan", "Kanguru"], answer: "Kanguru" },
    { verse: "Karanlıkta yönünü bulan, sesle yolunu çizen… (En'am 38)", options: ["Baykuş", "Köpek", "Yarasa", "Kedi"], answer: "Yarasa" }
  ],
  2: [
    { verse: "Rüzgarları döllenme göreviyle gönderdik… (Hicr 22)", options: ["Polen", "Kuş", "Sinek", "Arı"], answer: "Polen" },
    { verse: "Yağmurla ölü toprağa can verdik… (Kaf 50:9)", options: ["Solucan", "Bitki", "Kertenkele", "Mantar"], answer: "Bitki" },
    { verse: "Geceyi örtü, gündüzü geçim vakti kıldık… (Naba 10-11)", options: ["Hayvan", "Bitki", "İnsan", "Mikrop"], answer: "Hayvan" },
    { verse: "Güneşi bir kandil yaptık… (Nuh 16)", options: ["Fotosentez", "Enerji", "Işık", "Isı"], answer: "Fotosentez" },
    { verse: "Yeryüzünü döşedik, orada sabit dağlar yerleştirdik… (Lokman 10)", options: ["Volkan", "Yerçekimi", "Ekosistem", "Denge"], answer: "Denge" },
    { verse: "Suyun içinden canlılar yarattık… (Nur 45)", options: ["Kaplumbağa", "Kurbağa", "Balık", "Yunus"], answer: "Balık" },
    { verse: "Gökyüzünden su indirip onunla her çeşit bitkiyi çıkardık… (En'am 99)", options: ["Ot", "Bitki", "Mantar", "Ağaç"], answer: "Bitki" },
    { verse: "Geceyi dinlenme vakti kıldık… (Furkan 47)", options: ["Hayvan", "Bitki", "İnsan", "Bakteri"], answer: "Hayvan" },
    { verse: "Gökleri ve yeri bir düzen içinde yarattık… (Enbiya 16)", options: ["Atmosfer", "Ekosistem", "Denge", "Yerçekimi"], answer: "Ekosistem" },
    { verse: "Rüzgarları bulutları taşıyıcı olarak gönderdik… (Araf 57)", options: ["Arı", "Bulut", "Rüzgar", "Kuş"], answer: "Rüzgar" },
    { verse: "Toprağın çatlamasıyla içinden yeşillikler çıkar… (Abese 24-30)", options: ["Ot", "Bitki", "Mantar", "Ağaç"], answer: "Bitki" },
    { verse: "Gökten su indirip onunla bahçeler yetiştirdik… (Naba 14-15)", options: ["Ot", "Çiçek", "Bitki", "Ağaç"], answer: "Bitki" },
    { verse: "Her şeyi sudan canlı kıldık… (Enbiya 30)", options: ["Balık", "Canlı", "Bitki", "Mikrop"], answer: "Canlı" },
    { verse: "Güneşi bir ışık, ayı bir nur kıldık… (Yunus 5)", options: ["Isı", "Enerji", "Işık", "Düzen"], answer: "Işık" },
    { verse: "Yeryüzünde çeşit çeşit canlılar yaydık… (Şura 29)", options: ["İnsan", "Hayvan", "Bitki", "Mikrop"], answer: "Hayvan" }
  ],
  3: [
    { verse: "Çiftler halinde yarattık… (Zariyat 49)", options: ["Hayvan", "Bitki", "İnsan", "Mikrop"], answer: "Hayvan" },
    { verse: "Suyun içinden canlılar yarattık… (Nur 45)", options: ["Kurbağa", "Balık", "Yunus", "Kaplumbağa"], answer: "Balık" },
    { verse: "Topraktan sizi yarattık… (Hac 5)", options: ["Hayvan", "İnsan", "Bitki", "Mikrop"], answer: "İnsan" },
    { verse: "İnsanı bir damla sudan yarattık… (Nahl 4)", options: ["Hayvan", "İnsan", "Mikrop", "Bitki"], answer: "İnsan" },
    { verse: "Her canlıyı sudan yarattık… (Enbiya 30)", options: ["Balık", "Canlı", "Bitki", "Hayvan"], answer: "Canlı" },
    { verse: "Yeryüzünde yürüyenleri ve kanat çırpanları yarattık… (En'am 38)", options: ["Karınca", "Yılan", "Deve", "Kuş"], answer: "Kuş" },
    { verse: "Gökyüzünü yükselttik ve ölçü koyduk… (Rahman 7)", options: ["Yaratılış", "Denge", "Sistem", "Düzen"], answer: "Denge" },
    { verse: "İnsanı en güzel biçimde yarattık… (Tin 4)", options: ["Hayvan", "Bitki", "Mikrop", "İnsan"], answer: "İnsan" },
    { verse: "Yeryüzünü sizin için yaşanabilir kıldık… (Mülk 15)", options: ["Canlı", "Hayvan", "Bitki", "İnsan"], answer: "İnsan" },
    { verse: "Her şeyi bir ölçüyle yarattık… (Kamer 49)", options: ["Zaman", "Yaratılış", "Denge", "Sistem"], answer: "Denge" },
    { verse: "İnsanı çamurdan yarattık… (Sad 71)", options: ["Hayvan", "Bitki", "İnsan", "Mikrop"], answer: "İnsan" },
    { verse: "İnsanı bir nutfeden yarattık… (İnsan 2)", options: ["Hayvan", "Bitki", "Mikrop", "İnsan"], answer: "İnsan" },
    { verse: "İnsana işitme, görme ve kalp verdik… (Nahl 78)", options: ["Hayvan", "Bitki", "Mikrop", "İnsan"], answer: "İnsan" },
    { verse: "İnsanı sudan yarattık, soy ve nesep sahibi kıldık… (Furkan 54)", options: ["Hayvan", "Bitki", "Mikrop", "İnsan"], answer: "İnsan" }
      ]
}


// 🔊 Ses dosyaları tanımı
const correctSound = new Audio("assets/correct.mp3");
const wrongSound = new Audio("assets/wrong.mp3");
const levelUpSound = new Audio("assets/level-up.mp3");
const gameOverSound = new Audio("assets/game-over.mp3");

// 🔢 Oyun değişkenleri
let level = 1;
let lives = 3;
let points = 0;
let currentQuestion = 0;

// ▶️ Oyunu başlat
function startGame() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("game").classList.remove("hidden");
  loadQuestion();
}

// 📦 Soru yükle
function loadQuestion() {
  const levelQuestions = questions[level];
  if (currentQuestion >= levelQuestions.length) {
    level++;
    currentQuestion = 0;
    if (level > 3) return endGame(true);
    document.getElementById("level").innerText = "Seviye: " + level;
    levelUpSound.play();
    showLevelTransition(level);
    return;
  }

  const q = levelQuestions[currentQuestion];
  document.getElementById("question-box").innerText = q.verse;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  document.getElementById("feedback").innerText = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt, q.answer);
    optionsDiv.appendChild(btn);
  });
}


// ✅ Cevap kontrolü
function checkAnswer(selected, correct) {
  const feedback = document.getElementById("feedback");
  if (selected === correct) {
    points += 10;
    feedback.innerText = "✅ Doğru!";
    feedback.style.color = "#2ecc71";
    correctSound.play();
  } else {
    lives--;
    feedback.innerText = "❌ Yanlış!";
    feedback.style.color = "#e74c3c";
    wrongSound.play();
  }

  document.getElementById("points").innerText = "Puan: " + points;
  document.getElementById("lives").innerText = "Can: " + lives;

  currentQuestion++;
  setTimeout(() => {
    if (lives === 0) {
      endGame(false);
    } else {
      loadQuestion();
    }
  }, 1500);
}

// 🏁 Oyun sonu
function endGame(won) {
  if (!won) gameOverSound.play();
  document.getElementById("game").innerHTML = `
    <h2>${won ? "Tebrikler! Tüm seviyeleri tamamladın." : "Oyun Bitti!"}</h2>
    <p>Toplam Puan: ${points}</p>
    <button onclick="location.reload()">Yeniden Başla</button>
  `;
}