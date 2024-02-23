import { fetchUIElements } from './fetchUI.js';
const setButton = document.getElementById('btn');
const show = document.getElementById('resultBox');
setButton.addEventListener('click', async () => {
  let fetchUI = new fetchUIElements(document);
  let [g, i] = fetchUI.getCheckBoxes();
  let [text, regex] = fetchUI.getInputFields();
  const res = await window.electronAPI.regX(g, i, text, regex);
  show.innerText = res;
});
