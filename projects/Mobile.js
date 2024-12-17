import ProjectCard from "../components/ProjectCard"

const Mobile = {
    Cards: [
        ProjectCard({
            imgSrc: "images/tmedia.png",
            badges: [
                {name: 'React Native', color: '#e0bc00'},
                {name: 'Android Studio', color: '#2e6f40'},
            ],
            title: "TMedia Storage",
            description: "A mobile media storage application that stores pictures and videos at the remote server to help free up some space in your phone.",
            projLink: "https://github.com/DareAngeL/tmedia-storage",
            dateCreated: new Date('2024-12-11')
        }),
        ProjectCard({
            imgSrc: "images/tmessenger-ui.jpg",
            badges: [
                {name: 'Android Studio', color: '#2e6f40'},
                {name: 'NodeJS', color: '#68ba7f'},
                {name: 'Render', color: '#ed80e9'},
            ],
            title: "TMessager",
            description: "A personal messaging app for fast and secure communication with family. Share messages with ease.",
            projLink: "https://github.com/DareAngeL/TMessager",
            dateCreated: new Date('2022-12-31')
        }),
        ProjectCard({
            imgSrc: "images/graede-viewer.png",
            badges: [
                {name: 'Android Studio', color: '#2e6f40'},
            ],
            title: "Graede Viewer",
            description: "A Grade Viewer for Graede where students can view their grades online.",
            projLink: "https://github.com/DareAngeL/Graede-Viewer",
            dateCreated: new Date('2022-08-30')
        }),
        ProjectCard({
            imgSrc: "images/iccnote550px.png",
            badges: [
                {name: 'Android Studio', color: '#2e6f40'},
            ],
            title: "ICC Notes",
            description: "Efficiently organize my school modules with my user-friendly note taking app.",
            projLink: "https://github.com/DareAngeL/ICC_Notes",
            dateCreated: new Date('2021-09-26')
        }),
        ProjectCard({
            imgSrc: "images/Wifi-Management.png",
            badges: [
                {name: 'Android Studio', color: '#2e6f40'},
            ],
            title: "Tajos Wifi Management",
            description: "A simple app to easily manage my neighbours fee who connects to my Fiber WIFI. Monitor due dates and will notify me when due dates come.",
            projLink: "https://github.com/DareAngeL/Wifi-Management",
            dateCreated: new Date('2022-01-31')
        }),
    ],
    Projects: () => Mobile.Cards.map(card => card.element).join("\n")
}

export default Mobile