import { ipcMain, app } from 'electron'

// 退出
export function quitWindow(): void {
  ipcMain.on('quit:application', () => {
    app.quit()
  })
}
