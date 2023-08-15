declare namespace App {
  interface Menu {
    path: string
    fullPath?: string
    name?: string
    icon?: string
    isLink?: boolean
    affix?: boolean
    children?: Menu[]
  }
}
