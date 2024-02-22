const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
import {getUserInputs} from './logic';
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
// console.log('👋 This message is being logged by "renderer.js", included via Vite');
function handleSetTitle(event, title) {
  const webContent = event.sender;
  const win = BrowserWindow.fromWebContents(webContent)
  win.setTitle(title)
}
function handleReceiveResult(event, gFlag, iFlag, userText, userRegex) {
  return getUserInputs(gFlag, iFlag, userText, userRegex);
}
app.whenReady().then(() => {
  ipcMain.on('set-title', handleSetTitle);
  ipcMain.handle('result', handleReceiveResult)
})
/**
* The main running process.
*/
// function runMain() {
//   return getUserInputs(gFlagButton.ariaChecked, iFlagButton.ariaChecked, userText.value, userRegex.value);
// }
