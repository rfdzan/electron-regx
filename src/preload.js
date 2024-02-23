const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  regX: (gFlag, iFlag, userText, userRegex) => ipcRenderer.invoke('result', gFlag, iFlag, userText, userRegex),
});
