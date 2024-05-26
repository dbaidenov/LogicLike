import { create } from 'zustand'

type MenuStore = {
    activeMenu: string
    changeActiveMenu: (menu: string) => void
    uniqueTags: string[]
    setUniqueTags: (tags: string[]) => void
}

export const useMenuStore = create<MenuStore>()((set) => ({
    activeMenu: 'Все разделы',
    changeActiveMenu(menu) {
        set({ activeMenu: menu })
    },
    uniqueTags: [],
    setUniqueTags(tags) {
        set({ uniqueTags: tags })
    },
}))
