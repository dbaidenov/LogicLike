import './index.scss'
import { Link } from 'react-router-dom'
import { MAIN_ROUTE } from '@/utils/constants/routes.consts'

export default function NotFound() {
    return (
        <main className="not-found">
            <h1>Страница не найдена</h1>
            <Link className="not-found__link" to={MAIN_ROUTE}>
                Вернитесь на главную страницу
            </Link>
        </main>
    )
}
