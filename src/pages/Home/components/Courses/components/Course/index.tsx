import './index.scss'
import { CourseType } from '@/utils/types/courses.types'
import { FC } from 'react'

type CourseProps = {
    data: CourseType
}

const Course: FC<CourseProps> = ({ data }) => {
    return (
        <div className="course">
            <img
                src={data.image}
                className="course__image"
                alt="courseImage"
                style={{ backgroundColor: data.bgColor }}
            />
            <div className="course__name">{data.name}</div>
        </div>
    )
}

export default Course
