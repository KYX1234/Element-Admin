declare namespace App {
  interface Menu {
    path: string
    title?: string
    icon?: string
    isLink?: boolean
    children?: Menu[]
  }
}
