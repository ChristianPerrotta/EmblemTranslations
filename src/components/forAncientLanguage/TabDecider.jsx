import { Characters } from "./Characters";
import { Drill } from "./Drill";
import { shuffle } from "../../utils/shuffle";

export function TabDecider({tab, list, lessonNumber}) {

    const ifNumber = lessonNumber === '10' ? "number" : undefined;
    var numberList = [];
    if (lessonNumber === '10') {
        for (let i = 0; i < 10; i++) {
            let num = Math.floor(Math.random() * 99 + 1)
            numberList.push("" + num)
        }
    }
    
    if(tab === 'char') {
        return (
            <Characters 
                list={list.letters} 
                type={ifNumber || "character"}
                key={"lettersforlesson" + lessonNumber} 
            />
        )
    } else if (tab === 'drill1') {
        return (
            <Drill
                list={shuffle(list.letters)} 
                type={ifNumber || "character"}
                key={"drill1forlesson" + lessonNumber} 
            />
        )
    } else if (tab === 'words') {
        return (
            <Characters 
                list={lessonNumber === '10' ? numberList : shuffle(list.words)} 
                type={ifNumber || "word"}
                key={"wordsforlesson" + lessonNumber} 
            />
        )
    } else if (tab === 'drill2') {
        return (
            <Drill 
                list={lessonNumber === '10' ? numberList : shuffle(list.words)} 
                type={ifNumber || "word"}
                key={"drill2forlesson" + lessonNumber} 
            />
        )
    } else {
        return (
            <Drill 
                list={shuffle(list.names)} 
                type="name" 
                key={"namesforlesson" + lessonNumber} 
            />
        )
    }
}