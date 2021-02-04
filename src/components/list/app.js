import logError from './logError';
import { loadList, loadVideo, select, chooseList } from './utils';
import { showTime } from './clock';
import '../styles/main.scss';

const selectList = document.querySelector('.select-list');

window.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  // Show clock time
  showTime();

  // Fetch json
  // let myRequest = new Request('configuration.json');

  fetch('configuration.json')
    .then((resp) => resp.json())
    .then(startApp)
    .catch((err) => logError(err.message));
}

function startApp(configuration) {
  function showSelectedList() {
    const listIndex = selectList.options[selectList.selectedIndex].value;
    const list = configuration.savedLists[listIndex];

    loadList(list);
  }

  // Load youtube video
  loadVideo(configuration);

  // Load list options
  select(configuration);

  // Load landing page list
  showSelectedList();

  // Load list
  selectList.addEventListener('click', showSelectedList);
}
