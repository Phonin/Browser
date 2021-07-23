import * as yargsmod from 'yargs';
// @ts-ignore
import { hideBin } from 'yargs/helpers';

import { BrowserWindow, app } from 'electron';
import { resolve } from 'path';

const yargs = yargsmod(hideBin(process.argv))
  .command(
    'port',
    'The port for executing on (connects to localhost:[port]/ rather than ./build/index.html',
    {
      url: {
        alias: 'p',
      },
    }
  )
  .help().argv;

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 426,
    minHeight: 600,
    webPreferences: {
      autoplayPolicy: 'document-user-activation-required',
      nodeIntegration: false,
      nodeIntegrationInSubFrames: false,
      nodeIntegrationInWorker: false,
      webviewTag: true,
      contextIsolation: false,
    },
    frame: false,
    transparent: true,
  });

  if (yargs.port) win.loadURL(`http://127.0.0.1:${yargs.port}/`);
  else win.loadFile(resolve('build', 'index.html'));
  win.webContents.on('before-input-event', (event, input) => {
    if (
      (input.control && input.key.toLowerCase() === 'r') ||
      input.key.toLowerCase() === 'f5'
    ) {
      console.log('Reloading Page...');
      event.preventDefault();
      win.webContents.executeJavaScript(
        `window.dispatchEvent(new Event('ReloadCurrentTab'))`
      );
    }
  });
});
