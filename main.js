const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'その日の気温は華氏18度で外は晴れていた。梅子は:inserty:で:insertz:。:inserty:では、:insertx:が300ポンドの:insertw:いた。梅子はそれを見て驚いた。:insertx:が:insertw:いるのは珍しいことだからだ。';
let insertX = ['桃太郎','浦島太郎','金太郎'];
let insertY = ['公園','海辺','山'];
let insertZ = ['散歩をしていた','ゴミ拾いをしていた','食事をしていた'];
let insertW = ['鬼と戦って','亀を助けて','熊と戦って'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let wItem = randomValueFromArray(insertW);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertw:',wItem);
  newStory = newStory.replace(':insertw:',wItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅子',name);
  }

  if(document.getElementById("jp").checked) {
    const weight = Math.round(300*0.0714286) + ' kg';
    const temperature =  '摂氏' + Math.round((94-32) * 5 / 9);
    newStory = newStory.replace('華氏18',temperature);
    newStory = newStory.replace('300ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}