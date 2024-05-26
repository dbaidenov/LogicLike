import { useMenuStore } from '@/utils/store/menu.store'
import './index.scss'
import { FC } from 'react'

type MenuItemProps = {
    text: string
}

const MenuItem: FC<MenuItemProps> = ({ text }) => {
    const { changeActiveMenu, activeMenu } = useMenuStore()

    return (
        <div
            onClick={() => changeActiveMenu(text)}
            className={`menuItem ${activeMenu === text ? 'menuItem__active' : ''}`}
            key={text}
        >
            {text}
        </div>
    )
}

export default MenuItem
