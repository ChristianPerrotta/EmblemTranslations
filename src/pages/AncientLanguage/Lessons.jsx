import { useParams } from "react-router-dom"
import ancientData from "../../data/telliusLanguage.json"
import { useEffect, useState } from "react";
import { Characters } from "../../components/forAncientLanguage/Characters";
import { LessonNavigation } from "../../components/forAncientLanguage/LessonNavigation";
import { Drill } from "../../components/forAncientLanguage/Drill";
import { shuffle } from "../../utils/shuffle";

export function Lessons() {

    const [currentTab, setTab] = useState('char')

    const { lessonId } = useParams();
    const { letters, words, names } = ancientData[lessonId];
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

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className={isActive('char')} 
                    onClick={(e) => handleChangeTab('char')}>Characters</button>
                </li>
                <li className="nav-item">
                    <button className={isActive('drill1')}
                    onClick={(e) => handleChangeTab('drill1')}>Drill 1</button>
                </li>
                <li className="nav-item">
                    <button className={isActive('words')}
                    onClick={(e) => handleChangeTab('words')}>Words</button>
                </li>
                <li className="nav-item">
                    <button className={isActive('drill2')}
                    onClick={(e) => handleChangeTab('drill2')}>Drill 2</button>
                </li>
                {names.length !== 0 ?
                <li className="nav-item">
                    <button className={isActive('names')}
                    onClick={(e) => handleChangeTab('names')}>Names</button>
                </li>
                :
                null
                }
            </ul>

            {currentTab === 'char' ?
            <Characters list={letters} type="character" key={"lettersforlesson" + lessonId} />
            :
            currentTab === 'drill1' ?
            <Drill list={shuffle(letters)} type="letter" key={"drill1forlesson" + lessonId} />
            :
            currentTab === 'drill2' ?
            <Drill list={shuffle(words)} type="word" key={"drill2forlesson" + lessonId} />
            :
            currentTab === 'words' ?
            <Characters list={words} type="word" key={"wordsforlesson" + lessonId} />
            :
            <Drill list={shuffle(names)} type="name" key={"namesforlesson" + lessonId} />
            }

            <hr />
            
            <LessonNavigation currentLesson={lessonId} />
        </main>
    )
}