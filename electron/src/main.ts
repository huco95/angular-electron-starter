import { BrowserWindow, app } from 'electron'
import * as path from 'path'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (require('electron-squirrel-startup')) app.quit()

const loadApp = (win: BrowserWindow): void => {
  void win.loadURL(new URL(path.join('file:', __dirname, '../../dist/angular-electron-starter/browser/index.html')).href)
}

let win: BrowserWindow | null

const createWindow = (): void => {
  // Create the browser window.
  win = new BrowserWindow({
    height: 600,
    width: 800,
    resizable: true,
    title: 'Angular electron starter',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  loadApp(win)

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  // Fix issue with blank screen on reload
  win.webContents.on('did-fail-load', () => {
    if (win !== null) loadApp(win)
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
