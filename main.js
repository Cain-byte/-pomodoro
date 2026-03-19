const { app, BrowserWindow, Menu } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    resizable: false,
    maximizable: true,
    fullscreenable: false,
    frame: true, 
    transparent: false,
    webPreferences: {
      contextIsolation: true
    }
  });

Menu.setApplicationMenu(null);

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});