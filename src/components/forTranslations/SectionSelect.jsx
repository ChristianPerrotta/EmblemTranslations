export function SectionSelect({sections, pagination, hasSubsections, currentSection, currentSub, page, setPage, setSection, setSub}) {

    function handleSectionChange(event) {
        let section = event.target.value;
        setSection(section);
        setPage(sections[section].startingPage);
    }

    function handleSubsectionChange(event) {
        let value = event.target.value;
        for (let pageKey in pagination) {
            if (pagination[pageKey][1] === value) {
                setPage(pageKey)
                setSub(value)
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="form-floating">
                        <select className="form-select" id="sectionlist" name="sectionlist"
                            value={currentSection} onChange={handleSectionChange}>
                            {Object.keys(sections).map((item, i) => {
                                return(<option value={item} key={i}>{sections[item].name}</option>)
                            })}
                        </select>
                        <label htmlFor="sectionlist" className="form-label">Choose a section:</label>
                    </div>
                </div>

                {hasSubsections &&
                <div className="col">
                    <div className="form-floating">
                        {sections[currentSection].subsections ?
                        <select className="form-select" id="subsectionlist" name="subsectionlist"
                            value={currentSub} onChange={handleSubsectionChange}>
                            {sections[currentSection].subsections.map(subS => {
                                return <option value={subS} key={subS}>{subS}</option>
                            })}
                        </select>
                        :
                        <select className="form-select" id="subsectionlist" name="subsectionlist" 
                         disabled>
                            <option>---</option>
                        </select>
                        }
                        <label htmlFor="subsectionlist" className="form-label">Choose a subsection:</label>
                    </div>
                </div>}

            </div>
        </div>
    )
}