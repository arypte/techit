const root = document.querySelector('#root');

const mainElFirst = '<div class="main">';
const mainElLast = `자바스크립트로 만드는 HTML!</div>`;

const titleElFirst = '<div class = "title">';
const titleElLast = `</div>`;

const titleContent = `리액트를 잘하려면?`;
const ulElFirst = `<ul>`;
const ulElLast = '</ul>';

const liElFirst = `<li>`;
const liElLast = `</li>`;

const howToMasterReact = [
  '자바스크립트를 잘해야 한다.',
  'CSS를 잘해야한다.',
  'HTML을 잘해야 한다.',
];

const liArray = howToMasterReact.map((v, i) => {
  return `${liElFirst}${i + 1}.${v}${liElLast}`;
});

// 자바스크립트 맵함수 체크

console.log(liArray);

root.innerHTML =
  mainElFirst +
  titleElFirst +
  titleContent +
  titleElLast +
  ulElFirst +
  liElFirst +
  liArray +
  ulElLast +
  mainElLast;
