declare namespace App {
  /** 菜单属性 */
  interface Menu {
    path: string
    name?: string
    icon?: string
    isLink?: boolean
    affix?: boolean
    children?: Menu[]
  }
  /** 多页签属性 */
  interface TabsView {
    name: string
    fullPath: string
    icon?: string
    affix?: boolean
  }
}
