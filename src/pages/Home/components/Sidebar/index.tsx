import './index.scss'
import MenuItem from './components/MenuItem'
import { useMenuStore } from '@/utils/store/menu.store'

const Sidebar = () => {
    const { uniqueTags } = useMenuStore()
    return (
        <div className="sidebar">
            {uniqueTags?.map((menuItem) => (
                <MenuItem key={menuItem} text={menuItem} />
            ))}
        </div>
    )
}

export default Sidebar
