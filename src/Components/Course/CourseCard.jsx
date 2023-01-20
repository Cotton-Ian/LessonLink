export default function CourseCard({ course, onDeleteCourse, onEditCourse }) {
    return (
        <article className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg">
            <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    {course.title}
                </h3>
            </a>

            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                {course.description}
            </p>

            <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
                Y-aller
                <span
                    aria-hidden="true"
                    className="block transition group-hover:translate-x-0.5"
                >
                    &rarr;
                </span>
            </a>
            {/* <div classNameName="card-body">
                <h5 classNameName="card-title">{course.title}</h5>
                <p classNameName="card-text">{course.description}</p>
                <button onClick={() => onEditCourse(course.id)}>X</button>
                <button onClick={() => onDeleteCourse(course.id)}>X</button>
            </div> */}
        </article>
    )
}
