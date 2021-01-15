const {app, BrowserWindow} = require('electron');
const url = require('url')
const path = require('path')

// const {app, BrowserWindow} = electron;

// Set env
process.env.NODE_ENV = 'development'
const isDev = process.env.NODE_ENV !== 'production' ? true : false


let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
    })
    
    if (isDev) {
        mainWindow.webContents.openDevTools()
    }
    
    mainWindow.loadFile('./app/index.html');
});