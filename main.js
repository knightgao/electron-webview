const { app, BrowserWindow,Menu } = require('electron')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 720,
    // useContentSize: true,
    // titleBarStyle: 'hidden',
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
    },
    icon: 'assets/default.jpg'  // 窗口小图标
  })

  mainWindow.loadURL('https://gpt.51tyhealth.net/')
}

app.whenReady().then(() => {
  createWindow()
  Menu.setApplicationMenu(null);
  // app.on('activate', () => {
  //   if (BrowserWindow.getAllWindows().length === 0) createWindow()
  // })
})

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit()
// })