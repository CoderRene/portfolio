import ProjectCard from "../components/ProjectCard"

const Web = {
    Cards: [
        ProjectCard({
            imgSrc: "images/pos.png",
            badges: [
                {name: 'React', color: '#e0bc00'},
                {name: 'Tailwind', color: '#00cec8'},
                {name: 'Vite', color: '#81daca'},
                {name: 'Electron', color: '#ffb343'},
            ],
            title: "Point of Sale (POS) System", 
            description: "A robust application designed to streamline the sales process for retail businesses. This POS system handles product management, sales transactions, and reporting, providing a seamless experience for both users and administrators.",
            projLink: "https://github.com/DareAngeL/point-of-sale",
            dateCreated: new Date('2024-12-17')
        }),
        ProjectCard({
            imgSrc: "images/flairhaven.png",
            title: "FlairHaven",
            badges: [
                {name: 'React', color: '#e0bc00'},
                {name: 'Bootstrap', color: '#adcced'},
                {name: 'Sass', color: '#6d8196'},
            ],
            description: "A concept e-commerce digital art website where artists can showcase and sell their digital artwork to a global audience.",
            projLink: "https://github.com/DareAngeL/FlairHaven",
            webLink: "https://flair-haven.vercel.app/",
            dateCreated: new Date('2023-05-10')
        }, true),
        ProjectCard({
            imgSrc: "images/portfolio.png",
            badges: [
                {name: 'HTML', color: '#adcced'},
                {name: 'CSS', color: '#6d8196'},
                {name: 'JavaScript', color: '#e0bc00'},
            ],
            title: "My Portfolio", 
            description: "My website portfolio! Here, you'll find a collection of my latest and greatest projects",
            projLink: "https://github.com/DareAngeL/My-Portfolio",
            dateCreated: new Date('2023-04-01')
        }),
    ],
    Projects: () => Web.Cards.map(card => card.element).join("\n")
}

export default Web