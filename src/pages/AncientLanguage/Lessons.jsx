import { useParams } from "react-router-dom"
import ancientData from "../../data/telliusLanguage.json"
import { useEffect, useState } from "react";
import { LessonNavigation } from "../../components/forAncientLanguage/LessonNavigation";
import { TabDecider } from "../../components/forAncientLanguage/TabDecider";

export function Lessons() {

    const [currentTab, setTab] = useState('char')

    const { lessonId } = useParams();
    const lesson = ancientData[lessonId];
    const lessonNumber = lessonId.length === 8 ? "10" : lessonId[6]

    function handleChangeTab(tab) {
        setTab(tab)
    }

    function isActive(tab) {
        if (tab === currentTab) return "nav-link active"
        else return "nav-link"
    }

    useEffect(() => {
        setTab('char');
    }, [lessonId])

    return (
        <main className="container">
            <h1 className="mt-3">Lesson {lessonNumber}</h1>

            <p>{lesson.intro}</p>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className={isActive('char')} 
                    onClick={(e) => handleChangeTab('char')}>Chars</button>
                </li>
                <li className="nav-item">
                    <button className={isActive('drill1')}
                    onClick={(e) => handleChangeTab('drill1')}>Drill 1</button>
                </li>
                <li className="nav-item">
                    <button className={isActive('words')}
                    onClick={(e) => handleChangeTab('words')}>{lessonNumber === '10' ? "Numbers" : "Words"}</button>
                </li>
                <li className="nav-item">
                    <button className={isActive('drill2')}
                    onClick={(e) => handleChangeTab('drill2')}>Drill 2</button>
                </li>
                {lesson.names.length !== 0 ?
                <li className="nav-item">
                    <button className={isActive('names')}
                    onClick={(e) => handleChangeTab('names')}>Names</button>
                </li>
                :
                null
                }
            </ul>

            <TabDecider 
                tab={currentTab}
                list={lesson}
                lessonNumber={lessonNumber}
            />

            <hr />
            
            <LessonNavigation currentLesson={lessonId} />
        </main>
    )
}