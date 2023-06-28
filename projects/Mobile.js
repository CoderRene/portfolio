import ProjectCard from "../ProjectCard"

const Mobile = {
    Cards: [
        ProjectCard({
            imgSrc: "images/tmessenger-ui.jpg",
            title: "TMessager",
            description: "A personal messaging app for fast and secure communication with girlfriend. Share messages with ease.",
            projLink: "https://github.com/DareAngeL/TMessager",
            dateCreated: new Date('2022-12-31')
        }),
        ProjectCard({
            imgSrc: "images/graede-viewer.png",
            title: "Graede Viewer",
            description: "A Grade Viewer for Graede where students can view their grades online.",
            projLink: "https://github.com/DareAngeL/Graede-Viewer",
            dateCreated: new Date('2022-08-30')
        }),
        ProjectCard({
            imgSrc: "images/iccnote550px.png",
            title: "ICC Notes",
            description: "Efficiently organize my school modules with my user-friendly note taking app.",
            projLink: "https://github.com/DareAngeL/ICC_Notes",
            dateCreated: new Date('2021-09-26')
        }),
        ProjectCard({
            imgSrc: "images/Wifi-Management.png",
            title: "Tajos Wifi Management",
            description: "A simple app to easily manage my neighbours fee who connects to my Fiber WIFI. Monitor due dates and will notify me when due dates come.",
            projLink: "https://github.com/DareAngeL/Wifi-Management",
            dateCreated: new Date('2022-01-31')
        }),
    ],
    Projects: () => Mobile.Cards.map(card => card.element).join("\n")
}

export default Mobile