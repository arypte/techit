const BLOCK = "블";
const BBLE = "쁠";
const CHAIN = "체";
const SCHOOL = "스";

let word = BLOCK + CHAIN + SCHOOL;

if (word === "블체스") {
  console.log("블체스 화이팅!");
}

const 나는프로그래머다 = true;
const 나는천개의비트코인이있다 = false;
const 내가제일좋아하는음료는제로콜라다 = true;

let word2 = 나는천개의비트코인이있다;

if (word2) {
  console.log("true");
} else {
  console.log("false");
}

let bScore = 20;
let fScore = 90;

let TotalScore = bScore + fScore;

if (TotalScore > 78) {
  console.log("S");
} else if (TotalScore > 50) {
  console.log("A");
} else if (TotalScore > 30) {
  console.log("B");
} else {
  console.log("C");
}
