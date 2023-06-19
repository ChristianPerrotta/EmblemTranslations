const pagination20th = {
    "0": ["frontmatter", false],
    "4": ["msgAndIllust", false],
    "9": ["history", false],
    "17": ["worldGuide", "Archanea and Valentia Arc"],
    "68": ["column", "Portrait Transition History"],
    "70": ["column", "Lineage of Red-and-Green"],
    "71": ["worldGuide", "Jugdral Arc"],
    "108": ["column", "Lineage of 'Triangle Attack!'"],
    "109": ["worldGuide", "Elibe Arc"],
    "157": ["column", "Another Elibe Saga"],
    "158": ["column", "Hero's Battle: 'Smash Bros.' On-the-Go Edition"],
    "159": ["worldGuide", "Magvel Arc"],
    "179": ["worldGuide", "Tellius Arc"],
    "216": ["column", "'Path of Radiance' Movie Setting Illustrations"],
    "217": ["gallery", "Fire Emblem Trading Card Game Illustrations Collection"],
    "230": ["gallery", "'Archanea Saga' Illustration Gallery"],
    "234": ["gallery", "'New Mystery of the Emblem' Character Illustration Collection"],
    "238": ["gallery", "Special Interview: Yuka Tsujiyoko"],
    "239": ["gallery", "Book Guide"],
    "240": ["backmatter", false]
}

const reversedPages = Object.keys(pagination20th).toReversed();

const sections20th = {
    "frontmatter": [false, 0],
    "msgAndIllust": [false, 4],
    "history": [false, 9],
    "worldGuide": [true, 17, [
        "Archanea and Valentia Arc",
        "Jugdral Arc",
        "Elibe Arc",
        "Magvel Arc",
        "Tellius Arc"
    ]],
    "gallery": [true, 217, [
        "Fire Emblem Trading Card Game Illustrations Collection",
        "'Archanea Saga' Illustration Gallery",
        "'New Mystery of the Emblem' Character Illustration Collection",
        "Special Interview: Yuka Tsujiyoko",
        "Book Guide"
    ]],
    "column": [true, 68, [
        "Portrait Transition History",
        "Lineage of Red-and-Green",
        "Lineage of 'Triangle Attack!'",
        "Another Elibe Saga",
        "Hero's Battle: 'Smash Bros.' On-the-Go Edition",
        "'Path of Radiance' Movie Setting Illustrations"
    ]],
    "backmatter": [false, 240]
};

/* ------------[ DOM ELEMENTS ]-------------- */

const sectionSelect = document.getElementById("section");
const subSectionSelect = document.getElementById("subsection");
const rangeWidget = document.getElementById("page-range");
const pageSpan = document.getElementById("pagination");
const textBody = document.getElementById("main-text");

/* ------------[ EVENT FUNCTIONS ]-------------- */

function changedSection(value) {
    makeSubsections(value);
    let page = sections20th[value][1];
    setPageSpan(page);
    setRangeValue(page);
    setMainText(page);
}

function changedSubsection(value) {
    for (let pageKey in pagination20th) {
        if (pagination20th[pageKey][1] === value) {
            let page = pageKey;
            setPageSpan(page);
            setRangeValue(page);
            setMainText(page);
        }
    }
}

function changedRange(page) {
    setPageSpan(page);
    setSection(page);
    setMainText(page);
}

function toNextPage() {
    if (rangeWidget.value < 241) {
        let nextPage = Number(rangeWidget.value) + 1;
        setPageSpan(nextPage);
        setSection(nextPage);
        setMainText(nextPage);
        setRangeValue(nextPage);
    }
}

function toPreviousPage() {
    if (rangeWidget.value > 0) {
        let prevPage = Number(rangeWidget.value) - 1;
        setPageSpan(prevPage);
        setSection(prevPage);
        setMainText(prevPage);
        setRangeValue(prevPage);
    }
}

function changedRadios() {
    let page = Number(rangeWidget.value);
    setMainText(page);
}

/* ------------[ RESULT FUNCTIONS ]-------------- */

function setPageSpan(page) {
    if (page == "0") {
        pageSpan.innerHTML = "Cover Page";
    } else if (page == "241") {
        pageSpan.innerHTML = "Back Cover";
    } else {
        pageSpan.innerHTML = "Page " + page + " / 240";
    }
}

function setRangeValue(page) {
    rangeWidget.value = page;
}

function setSection(currentPage) {
    for (let page of reversedPages) {
        if (Number(currentPage) >= Number(page)) {
            let section = pagination20th[page][0];
            sectionSelect.value = section;
            makeSubsections(section);
            setSubsection(currentPage);
            break;
        }
    }
}

function makeSubsections(value) {
    if (sections20th[value][0]) {
        //section has subsections
        subSectionSelect.disabled = false;
        subSectionSelect.innerHTML = "";
        let list = sections20th[value][2]
        for (let subsection of list) {
            let option = document.createElement('option');
            option.value = subsection;
            option.innerHTML = subsection;
            subSectionSelect.appendChild(option);
        }

    } else {
        //section has no subsections
        subSectionSelect.disabled = true;
        subSectionSelect.innerHTML = "<option>---</option>";
    }
}

function setSubsection(currentPage) {
    for (let page of reversedPages) {
        if (Number(currentPage) >= Number(page)) {
            let subSection = pagination20th[page][1];
            subSectionSelect.value = subSection;
            break;
        }
    }
}

/* ------------[ MAIN TEXT ]-------------- */

function setMainText(page) {
    let radios = document.querySelector('input[name="displayRadios"]:checked');
    textBody.replaceChildren(); // clear all nodes
    let pageList = book20th[page];

    if (radios.value == "topBottom") {
        var topDiv = document.createElement("div");
        var bottomDiv = document.createElement("div");
        textBody.appendChild(topDiv);
        textBody.appendChild(bottomDiv);
    }
    // paragraph loop
    for (let line in pageList) {
        if (pageList[line][0] == "hr") {
            textBody.appendChild(document.createElement("hr"));
        } else {
            
            if (radios.value != "japanese") {
                var englishElement = document.createElement(pageList[line][0]);
                englishElement.innerHTML = pageList[line][1];
            }
            
            if (radios.value != "english") {
                var japaneseElement = document.createElement(pageList[line][0]);
                japaneseElement.innerHTML = pageList[line][2];
            }
            
            if (radios.value == "leftRight") {
                var newRow = document.createElement("div");
                newRow.classList.add("row");
                newRow.appendChild(englishElement);
                newRow.appendChild(japaneseElement);
                englishElement.classList.add("col");
                japaneseElement.classList.add("col");
                textBody.appendChild(newRow);
            } else if (radios.value == "topBottom") {
                topDiv.appendChild(englishElement);
                bottomDiv.appendChild(japaneseElement);
            } else if (radios.value == "intercalated") {
                var newRow = document.createElement("div");
                newRow.appendChild(japaneseElement);
                newRow.appendChild(englishElement);
                textBody.appendChild(newRow);
            } else if (radios.value == "english") {
                textBody.appendChild(englishElement);
            } else {
                textBody.appendChild(japaneseElement);
            }
        }
    }
}