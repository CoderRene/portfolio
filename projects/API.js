import ProjectCard from "../components/ProjectCard"

const API = {
    Cards: [
        ProjectCard({
            imgSrc: "images/API.png",
            badges: [
                {name: 'NodeJS', color: '#68ba7f'},
                {name: 'Express', color: '#adcced'},
                {name: 'Sequelize', color: '#6d8196'},
            ],
            title: "POS System API",
            description: "This serves as the backend for my modern Point of Sale (POS) system project, designed to handle essential business operations seamlessly.",
            projLink: "https://github.com/DareAngeL/point-of-sale-backend",
            dateCreated: new Date('2024-12-17')
        }),
        ProjectCard({
            imgSrc: "images/API.png",
            badges: [
                {name: 'NodeJS', color: '#68ba7f'},
                {name: 'Express', color: '#adcced'},
                {name: 'Sequelize', color: '#6d8196'},
            ],
            title: "TMedia Storage API",
            description: "Serves as a backend system supporting the core features and workflows within the TMedia Storage project.",
            projLink: "https://github.com/DareAngeL/flairhaven-api",
            dateCreated: new Date('2024-12-11')
        }),
        ProjectCard({
            imgSrc: "images/API.png",
            badges: [
                {name: 'NodeJS', color: '#68ba7f'},
                {name: 'Express', color: '#adcced'},
                {name: 'MongoDB', color: '#6d8196'},
            ],
            title: "FlairHaven API",
            description: "Serves as a backend system supporting the core features and workflows within the FlairHaven project.",
            projLink: "https://github.com/DareAngeL/flairhaven-api",
            dateCreated: new Date('2023-05-9')
        }),
    ],
    Projects: () => API.Cards.map(card => card.element).join("\n")
}

export default API