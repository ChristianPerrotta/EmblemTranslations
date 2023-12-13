import { Link } from "react-router-dom"

export default function LessonNavigation({currentLesson}) {

    const lessonNumber = currentLesson.length === 8 ? 10 : Number(currentLesson[6])

    function isPreviousDisabled() {
        if(currentLesson === "lesson1") return "page-item disabled"
        else return "page-item"
    }

    function isNextDisabled() {
        if(currentLesson === "lesson10") return "page-item disabled"
        else return "page-item"
    }

    

    return (
        <nav aria-label="Lesson pages navigation">
            <ul className="pagination pagination-sm justify-content-center">
                <li className={isPreviousDisabled()}>
                    <Link to={"/ancient/lesson" + (lessonNumber - 1)} className="page-link">Previous</Link>
                </li>

                {[...Array(10)].map((e, i) => {
                    if (i + 1 === lessonNumber) {
                        return (
                            <li key={"lesson" + (i+1)} className="page-item active" aria-current="page">
                                <a className="page-link">{i + 1}</a>
                            </li>
                        )
                    } else {
                        return (
                            <li key={"lesson" + (i+1)} className="page-item">
                                <Link to={"/ancient/lesson" + (i + 1)} className="page-link">{i + 1}</Link>
                            </li>
                        )
                    }
                })}

                <li className={isNextDisabled()}>
                    <Link to={"/ancient/lesson" + (lessonNumber + 1)} className="page-link">Next</Link>
                </li>
            </ul>
        </nav>
    )
}