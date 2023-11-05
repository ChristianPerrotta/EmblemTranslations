import cover from "../../assets/20th-book.jpg"
import { Description } from "../../components/forTranslations/Description";
import { ModeRadios } from "../../components/forTranslations/ModeRadios";
import { PageRanger } from "../../components/forTranslations/PageRanger";
import { SectionSelect } from "../../components/forTranslations/SectionSelect";
import { TextRender } from "../../components/forTranslations/TextRender";
import { book20th } from "../../data/TR1-20thanniversary/20th-anniversary-text";
import { sections20th, pagination20th, description } from "../../data/TR1-20thanniversary/20th-metadata";
import { useEffect, useState } from "react";

export function TR1_20thAnniversary() {
    
    const [page, setPage] = useState(0);
    const [section, setSection] = useState("frontmatter");
    const [subSection, setSub] = useState("---");
    const [mode, setMode] = useState("leftRight");


    useEffect(() => {
        const reversedPages = Object.keys(pagination20th).toReversed();
        for (let p of reversedPages) {
            if (Number(page) >= Number(p)) {
                setSection(pagination20th[p][0]);
                setSub(pagination20th[p][1])
                break;
            }
        }
    }, [page])

    // ------------------- RETURN -------------------
    return (
        <main className="container">

            <Description
                paragraphs={description}
                img={cover}
            />

            <SectionSelect
                sections={sections20th}
                pagination={pagination20th}
                hasSubsections={true}
                currentSection={section}
                currentSub={subSection}
                page={page}
                setPage={setPage}
                setSection={setSection}
                setSub={setSub}
            />

            <ModeRadios
                selectedRadioBtn={mode}
                setMode={setMode}
            />

            <PageRanger
                page={page}
                lastPage={241}
                setPage={setPage}
            />

            <TextRender
                page={book20th[page]}
                mode={mode}
            />
        </main>
    )
}