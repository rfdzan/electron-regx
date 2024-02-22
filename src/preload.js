const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  regX: (gFlag, iFlag, userText, userRegex) => ipcRenderer.invoke('result', gFlag, iFlag, userText, userRegex),
});
