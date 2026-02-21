import { ElectronWindowType } from '../window-type'
import AuthWindow from './authWindow'
import CommonWindow from './common'
import MainWindow from './mainWindow'

// 实现工厂方法
export default class WindowFactory {
  static createWindow(winType: string): CommonWindow {
    switch (winType) {
      case ElectronWindowType.Auth:
        return new AuthWindow()
      case ElectronWindowType.Main:
        return new MainWindow()
      default:
        throw new Error(`Invalid animal type: ${winType}`)
    }
  }
}
