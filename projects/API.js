const API = {
    Cards: [
        ProjectCard({
            imgSrc: "images/API.png",
            title: "FlairHaven API",
            description: "Serves as a backend system supporting the core features and workflows within the FlairHaven project.",
            projLink: "https://github.com/DareAngeL/flairhaven-api",
            dateCreated: new Date('2023-05-9')
        }),
    ],
    Projects: () => API.Cards.map(card => card.element).join("\n")
}