import gms from '../../assets/images/gms.png'
import got from '../../assets/images/got.png'
import nkata from '../../assets/images/pic.jfif'
import swyft from '../../assets/images/swyft.png'
import backend from '../../assets/images/backend.jpg'
import carventure from '../../assets/images/carventure.png'

export const Frontend = [
    {
        name: "GOT Universe",
        description: "A web app that lists Game Of Thrones and random quotes by them.",
        technologies: ['ReactJS', 'HTML', 'CSS'],
        links: {
            website: "https://gotuniverse.netlify.app/",
            github: "https://github.com/ChinonsoIke/GOT-Universe"
        },
        image: got
    },
    {
        name: "Nkata",
        description: "A real time chat app that enables users to communicate with added contacts.",
        technologies: ['VueJS', 'Vuex', 'Tailwind CSS', 'HTML', 'CSS'],
        links: {
            website: "https://nkata-ng.netlify.app/",
            github: "https://github.com/ChinonsoIke/Nkata-Chat-App"
        },
        image: nkata
    },
    {
        name: "GMS Travels",
        description: "A flights, hotels and destinations booking system for a Nigerian-based start-up.",
        technologies: ['VueJS', 'inertia', 'HTML', 'CSS', 'Bootstrap'],
        links: {
            website: "https://gmstravels.com"
        },
        image: gms
    }
]

export const Backend = [
    {
        name: "Car Venture",
        description: "A car rental app built with ASP.NET Core MVC",
        technologies: ['ASP.NET Core MVC', 'ADO.NET', 'MS SqlServer'],
        links: {
            github: "https://github.com/ChinonsoIke/CarVenture"
        },
        image: carventure
    },
    {
        name: "GMS Travels",
        description: "A flights, hotels and destinations booking system for a Nigeria-based start-up.",
        technologies: ['Laravel', 'Pusher Channels', 'MySql'],
        links: {
            website: "https://gmstravels.com"
        },
        image: gms
    },
    {
        name: "Swyft",
        description: "A desktop application that models a banking system and its operations",
        technologies: ['C#', 'WinForms'],
        links: {
            github: "https://github.com/ChinonsoIke/Swyft-WinForm"
        },
        image: swyft
    }
]