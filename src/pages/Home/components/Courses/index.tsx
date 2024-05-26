import { getUniqueTags } from '@/utils/services/courses.service'
import './index.scss'
import { useApi } from '@/utils/services/axios'
import { useMenuStore } from '@/utils/store/menu.store'
import { CourseType } from '@/utils/types/courses.types'
import { useEffect, useMemo, useState } from 'react'
import Course from './components/Course'

const Courses = () => {
    const { setUniqueTags, activeMenu } = useMenuStore()
    const { data } = useApi<CourseType[]>('/courses.json')

    const [filteredCourses, setFilteredCourses] = useState<CourseType[]>()

    const uniqueTags = useMemo(() => {
        return data ? getUniqueTags(data) : null
    }, [data])

    useEffect(() => {
        setUniqueTags(uniqueTags as string[])
    }, [uniqueTags])

    useEffect(() => {
        setFilteredCourses(() => {
            return activeMenu === 'Все разделы'
                ? data
                : data?.filter((course) => course.tags.includes(activeMenu))
        })
    }, [activeMenu, uniqueTags])

    return (
        <div className="courses">
            {filteredCourses?.map((data) => (
                <Course key={data.id} data={data} />
            ))}
        </div>
    )
}

export default Courses
