export const pagination20th = {
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

export const sections20th = {
    frontmatter: {
        name: "Front Matter",
        startingPage: 0,
        subsections: false
    },
    
    msgAndIllust: {
        name: "Message & Illustration",
        startingPage: 4,
        subsections: false
    },

    history: {
        name: "Fire Emblem History",
        startingPage: 9,
        subsections: false
    },

    worldGuide: {
        name: "World Guide",
        startingPage: 17,
        subsections: [
            "Archanea and Valentia Arc",
            "Jugdral Arc",
            "Elibe Arc",
            "Magvel Arc",
            "Tellius Arc"
        ]
    },

    gallery: {
        name: "Gallery & Interview",
        startingPage: 217,
        subsections: [
            "Fire Emblem Trading Card Game Illustrations Collection",
            "'Archanea Saga' Illustration Gallery",
            "'New Mystery of the Emblem' Character Illustration Collection",
            "Special Interview: Yuka Tsujiyoko",
            "Book Guide"
        ]
    },

    column: {
        name: "Column",
        startingPage: 68,
        subsections: [
            "Portrait Transition History",
            "Lineage of Red-and-Green",
            "Lineage of 'Triangle Attack!'",
            "Another Elibe Saga",
            "Hero's Battle: 'Smash Bros.' On-the-Go Edition",
            "'Path of Radiance' Movie Setting Illustrations"
        ]
    },

    backmatter: {
        name: "Back Matter",
        startingPage: 240,
        subsections: false
    }
};

export const description = [
    "The Fire Emblem 20th Anniversary Encyclopedia is a comprehensive reference guide dedicated to the popular tactical role-playing game series. Fire Emblem. Published in 2010 by Nintendo, this book commemorates the 20th anniversary of the franchise's debut.",
    "The encyclopedia offers a wealth of information about the Fire Emblem series, covering a wide range of topics such as characters, storylines, gameplay mechanics, and historical background. It provides detailed profiles of the numerous protagonists, villains, and supporting characters featured throughout the games, along with their respective biographies and artwork. Additionally, the book delves into the intricate world-building and lore of the Fire Emblem universe, exploring the diverse kingdoms, nations, and conflicts that shape its narratives. Players and fans alike can dive into the encyclopedia's pages to gain a deeper understanding of the beloved franchise's rich history and intricate gameplay mechanics.",
    "Since the book contains many personal names writen exclusively in kanji, especially on page 240, their readings may not be accurate, since there is not always a single way to read personal names in Japanese without a reference.",
    "Use the dropdown menus below to choose a section to read. Some sections also include subsections. You can navigate through the pages using the NEXT and PREVIOUS buttons, as well as moving the slider."
]