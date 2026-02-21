import { BrowserWindow } from 'electron'
import { ElectronWindowType } from '../window-type'
import WindowFactory from '../window'
import CommonWindow from '../window/common'

export function switchWindow(winType: ElectronWindowType, win: BrowserWindow): CommonWindow {
  win.close()
  return WindowFactory.createWindow(winType)
}
