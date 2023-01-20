import { useEffect, useState } from 'react'
import CourseCard from './CourseCard'

export default function CourseList() {
    const [courses, setCourses] = useState([
        { id: 1, title: 'React', description: 'React description' },
        { id: 2, title: 'Angular', description: 'Angular description' },
        { id: 3, title: 'Vue', description: 'Vue description' },
        { id: 4, title: 'Node', description: 'Node description' },
        { id: 5, title: 'Express', description: 'Express description' },
    ])

    const onDeleteCourse = (courseId) => {
        console.log(courseId)
    }

    const onEditCourse = (courseId) => {
        console.log(courseId)
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {courses.map((course) => {
                return (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onDeleteCourse={onDeleteCourse}
                        onEditCourse={onEditCourse}
                    />
                )
            })}
        </div>
    )
}
