const clock = document.querySelector('.clock');
const container = document.querySelector('.container');
const list = document.querySelector('.list');
const listElements = document.querySelector('.list-elements');
const video = document.querySelector('.video');

// const listName = document.querySelector('.list-name');
// const addTaskButton = document.querySelector('.button__add-task');
// const listInput = document.querySelector('.list-input');
const selectList = document.querySelector('.select-list');

// Load youtube video
export function loadVideo(data) {
  video.setAttribute('src', `${data.embeddedYoutubeVideo}?autoplay=1`);
}

// Load lists' options

export function select(data) {
  data.savedLists.forEach((list, idx) => {
    const newElement = document.createElement('option');

    newElement.setAttribute('value', idx);
    newElement.textContent = list.label;

    selectList.appendChild(newElement);
  });
}

// Load to do list
export function loadList(list) {
  listElements.innerText = '';

  // List background
  container.style.backgroundColor = list.backgroundListColor;

  // List elements
  list.toDos.forEach((element) => {
    const newElement = document.createElement('li');

    newElement.style.color = element.color;
    newElement.classList.add('list-element');
    newElement.textContent = element.name;
    newElement.addEventListener('click', (event) => event.target.classList.toggle('checked'));

    listElements.appendChild(newElement);
  });
}
