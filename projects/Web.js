import ProjectCard from "../ProjectCard"

const Web = {
    Cards: [
        ProjectCard({
            imgSrc: "images/flairhaven.png",
            title: "FlairHaven",
            description: "A concept e-commerce digital art website where artists can showcase and sell their digital artwork to a global audience.",
            projLink: "https://github.com/DareAngeL/FlairHaven",
            webLink: "https://flair-haven.vercel.app/",
            dateCreated: new Date('2023-05-10')
        }, true),
        ProjectCard({
            imgSrc: "images/portfolio.png",
            title: "My Portfolio", 
            description: "My website portfolio! Here, you'll find a collection of my latest and greatest projects",
            projLink: "https://github.com/DareAngeL/My-Portfolio",
            dateCreated: new Date('2023-04-01')
        }),
    ],
    Projects: () => Web.Cards.map(card => card.element).join("\n")
}

export default Web