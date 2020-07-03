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
const hard = document.getElementById("hard");
const medium = document.getElementById("medium");
const easy = document.getElementById("easy");

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
