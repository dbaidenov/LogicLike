import { CourseType } from '../types/courses.types'

export const getUniqueTags = (data: CourseType[]) => {
    const tags = data.flatMap((course) => course.tags)
    return ['Все разделы', ...new Set(tags)]
}
