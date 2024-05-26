import './index.scss'
import Loader from '@/components/shared/Loader'
import { Suspense, lazy } from 'react'
const Courses = lazy(() => import('./components/Courses'))
const Sidebar = lazy(() => import('./components/Sidebar'))

export default function Home() {
    return (
        <Suspense fallback={<Loader />}>
            <div className="main">
                <Sidebar />
                <Courses />
            </div>
        </Suspense>
    )
}
