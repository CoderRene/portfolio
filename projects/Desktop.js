import ProjectCard from "../components/ProjectCard"

const Desktop = {
    Cards: [
        ProjectCard({
            imgSrc: "images/graede550px.png",
            badges: [
                {name: 'Netbeans', color: '#dea193'},
                {name: 'Atom', color: '#ba867b'},
                {name: 'WYSIWYG Web Builder', color: '#ede8d0'},
                {name: 'FirebaseDB', color: '#c9c5b1'},
                {name: 'Firebase Hosting', color: '#d9d9d9'},
            ],
            title: "Graede",
            description: "Graede brings all of your student grades in one place, making them instantly searchable and accessible from anywhere.",
            projLink: "https://github.com/DareAngeL/Graede",
            dateCreated: new Date('2022-07-17') 
        }),
    ],
    Projects: () => Desktop.Cards.map(card => card.element).join("\n")
}

export default Desktop