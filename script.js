const navbar = document.querySelector(".navbar");
const settingsbtn = document.getElementById("settings-btn");
const contentBox = document.querySelector(".contentbox");
const word = document.getElementById("word");
const timerEl = document.querySelector(".timer");
const scoreEl = document.querySelector(".score");
const endGameEl = document.getElementById("End-Game");
const typeIn = document.getElementById("typeIn");
const settingsForm = document.getElementById("settingsForm");
const difficultySelect = document.getElementById("difficultySelect");
// const hard = document.getElementById("hard");
// const medium = document.getElementById("medium");
// const easy = document.getElementById("easy");

//word list for typing
const letterMatching = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
const sightWordsK = [
  "I",
  "like",
  "the",
  "and",
  "see",
  "we",
  "a",
  "to",
  "come",
  "me",
  "with",
  "my",
  "you",
  "what",
  "are",
  "now",
  "is",
  "how",
  "find",
  "be",
  "go",
  "for",
  "this",
  "will",
  "make",
  "play",
  "said",
  "good",
  "she",
  "all",
  "he",
  "no",
  "do",
  "down",
  "have",
  "help",
  "look",
  "out",
  "off",
  "take"
];
const makeSentencesK = [
  "I like you.",
  "We have a cat.",
  "Come and see.",
  "What is this?",
  "Help me make this.",
  "He said no.",
  "I go out.",
  "We all go down",
  "She is with me.",
  "Play with this.",
  "Be good.",
  "I will find out",
  "This is how we take off.",
  "Look for my cat."
];

//init randomization
let randomWord;
//init score
let score;
//init time
let time = 180;

// Set difficulty to value in ls or medium
let difficulty = "hard";

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//set timeinterval for change of seconds
const timeInterval = setInterval(updateTime, 1000);

//generate random word from an array specified by difficulty level
function getRandomWord() {
  let wordList;
  function getWordList() {
    if (difficulty === "hard") {
      wordList = makeSentencesK;
      return wordList;
    } else if (difficulty === "easy") {
      wordList = letterMatching;
      return wordList;
    } else {
      wordList = sightWordsK;
      return wordList;
    }
  }
  wordList = getWordList();
  return wordList[Math.floor(Math.random() * wordList.length)];
}
//function to update time
function updateTime() {
  time--;
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = "0" + String(sec);
  }

  timerEl.innerText = `Time: ${min}:${sec}`;
}

//add random word to DOM
function addWordtoDOM() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}
addWordtoDOM();

typeIn.addEventListener("input", e => {
  if (e.target.value === randomWord) {
    //update score;
    e.target.value = "";
    addWordtoDOM();
  }
});
