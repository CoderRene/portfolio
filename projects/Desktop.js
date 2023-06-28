const Desktop = {
    Cards: [
        ProjectCard({
            imgSrc: "images/graede550px.png",
            title: "Graede",
            description: "Graede brings all of your student grades in one place, making them instantly searchable and accessible from anywhere.",
            projLink: "https://github.com/DareAngeL/Graede",
            dateCreated: new Date('2022-07-17') 
        }),
    ],
    Projects: () => Desktop.Cards.map(card => card.element).join("\n")
}