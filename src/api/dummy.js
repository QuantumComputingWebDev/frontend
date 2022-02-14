const people = [
    {
        name: "Ali Hamed Moosavian",
        title: "Researcher at QuOne Lab at Phanous Research and Innovation Centre",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Ali Hamed Moosavian.jpg",
        link: "https://linkedin.com/",
        posterSrc: `/images/posters/Ali Hamed Moosavian intro.jpeg`,
        id: 1,
    },
    {
        name: "Aram Harrow",
        title: "Associate Professor of Center for Theoretical Physics Massachusetts Institute of Technology",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Aram Harrow.jpg",
        link: "https://linkedin.com/",
        posterSrc: `/images/posters/Aram Harrow intro.jpeg`,
        id: 2,
    },
    {
        name: "Jacob Biamonte",
        title: "Leader of Skoltech’s Quantum Machine Learning Initiative",
        about: `Jacob Biamonte is an American quantum computer scientist and Associate Professor at the Skolkovo Institute of Science and Technology (founded in collaboration with M.I.T.) and the inaugural Leader of Skoltech’s Quantum Machine Learning Initiative. He has made several contributions to the theory and implementation of quantum computers.
        Biamonte earned an award winning PhD at the University of Oxford and his collective research was recognized in 2013 with the Shapiro Award in Mathematical Physics. He has advised both government agencies and industry and lead several successful interdisciplinary research teams and projects, comprised of students and research staff with backgrounds spanning physics, mathematics and computer science. He supervised four exceptional PhD students and five extraordinarily talented postdocs, two of which are now Assistant Professors. He was invited to become a lifelong member of the Foundational Questions Institute (FQXi) and serves on the editorial boards of several notable journals. Jacob Biamonte is an American quantum computer scientist and Associate Professor at the Skolkovo Institute of Science and Technology (founded in collaboration with M.I.T.) and the inaugural Leader of Skoltech’s Quantum Machine Learning Initiative. He has made several contributions to the theory and implementation of quantum computers. Biamonte was employed as one of the world's first quantum software programmers at D-Wave Systems Inc. in Vancouver B.C., Canada. From this work, he published several celebrated proofs establishing the computational universality of specific quantum many-body ground states used in adiabatic quantum computing. He played a central role in developing aspects of contemporary quantum computing theory, including research recognized as pioneering the emerging field that unites quantum information with complex network theory and machine learning. Biamonte earned an award winning PhD at the University of Oxford and his collective research was recognized in 2013 with the Shapiro Award in Mathematical Physics. He has advised both government agencies and industry and lead several successful interdisciplinary research teams and projects, comprised of students and research staff with backgrounds spanning physics, mathematics and computer science. He supervised four exceptional PhD students and five extraordinarily talented postdocs, two of which are now Assistant Professors. He was invited to become a lifelong member of the Foundational Questions Institute (FQXi) and serves on the editorial boards of several notable journals.
        Biamonte was employed as one of the world's first quantum software programmers at D-Wave Systems Inc. in Vancouver B.C., Canada. From this work, he published several celebrated proofs establishing the computational universality of specific quantum many-body ground states used in adiabatic quantum computing. He played a central role in developing aspects of contemporary quantum computing theory, including research recognized as pioneering the emerging field that unites quantum information with complex network theory and machine learning.`,
        src: "/images/Jacob Biamonte.jpeg",
        link: "https://linkedin.com/",
        posterSrc: `/images/posters/Jacob Biamonte intro.jpeg`,
        id: 3,
    },
    {
        name: "Leila Taghavi",
        title: "Postdoctoral Researcher at Phanous Research and Innovation Centre",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Leila Taghavi.png",
        link: "https://linkedin.com/",
        posterSrc: `/images/posters/Leila Taghavi intro.jpeg`,
        id: 4,
    },
    {
        name: "Min-Hsiu Hsieh",
        title: "Director at Hon Hai (Foxconn) Quantum Computing Research Center, Taiwan",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Min-Hsiu Hsieh.png",
        link: "https://linkedin.com/",
        posterSrc: `/images/posters/Min-Hsiu Hsieh intro.jpeg`,
        id: 5
    },
    {
        name: "Richard Kueng",
        title: "assistant professor (tenure track) for Quantum Computing at the Johannes Kepler University Linz, Austria",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Richard Kueng.jpg",
        link: "https://linkedin.com/",
        posterSrc: `/images/posters/Richard Kueng intro.jpeg`,
        id: 6,
    },
    {
        name: "Saleh Rahimi Keshari",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        title: "Assistant Professor at University of Tehran",
        src: "/images/Saleh Rahimi Keshari.png",
        link: "https://linkedin.com/",
        posterSrc: `/images/posters/Saleh Rahimi Keshari intro.jpeg`,
        id: 7,
    },
    {
        name: "Vedran Dunjko",
        about: `I am an Assistant Professor (tenure track) at the Leiden Institute of
        Advanced Computer Science, Leiden University, and a member of the LIACS
        theory group. I am also affiliated with the Quantum Software
        Consortium, and am a co-founder of the  Applied Quantum Algorithms - Leiden  interdepartmental initiative.`,
        title: "Assistant Professor (tenure track, UD1), lead of aQa group, LIACS & LION, Leiden University",
        src: "/images/Vedran Dunjko.jpg",
        link: "https://linkedin.com/",
        posterSrc: `/images/posters/Vedran Dunjko intro.jpeg`,
        id: 8,
    },
    {
        name: "Amir Najafi",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        title: "Postdoctoral Researcher, Institute for Research in Fundamental Sciences (IPM)",
        src: "/images/Ali Najafi.jpg",
        link: "https://linkedin.com/",
        posterSrc: `/images/posters/Amir Najafi intro.jpeg`,
        id: 9,
    },
    {
        name: "Abolfazl Bayat",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        title: "Research Associate at University College London",
        src: "/images/Abolfazl Bayat.png",
        link: "https://linkedin.com/",
        posterSrc: `/images/posters/Abolfazl Bayat intro.jpeg`,
        id: 10,
    },
]

const events = [
    {
        dayCount: 1,
        dateText: "22 Feb",
        events: [
            {
                timeText: "2:00 - 3:00 PM",
                title: "Introduction to Quantum Computation",
                speaker: people[6],
                poster: "/images/posters/day1.jpeg",
            },
            {
                timeText: "3:10 - 4:10 PM",
                title: "Introduction to Classical Machine Learning",
                speaker: people[8],
                poster: "/images/posters/day1.jpeg",
            },
        ]
    },
    {
        dayCount: 2,
        dateText: "23 Feb",
        events: [
            {
                timeText: "10:00 - 12:10 PM",
                title: "Variational Quantum - Classical Algorithms",
                speaker: people[9],
                poster: "/images/posters/day1.jpeg",
            },
            {
                timeText: "2:00 - 4:10 PM",
                title: "IDK",
                speaker: people[3],
                poster: "/images/posters/day1.jpeg",
            },
            {
                timeText: "4:30 - 5:30 PM",
                title: "Adiabatic Quantum Machine Learning",
                speaker: people[0],
                poster: "/images/posters/day1.jpeg",
            }
        ]
    },
    {
        dayCount: 3,
        dateText: "24 Feb",
        events: [
            {
                timeText: "10:00 - 11:00 AM",
                title: "Beyond Quantum Kernels, Beyond Supervised Learning",
                speaker: people[7],
                poster: "/images/posters/day1.jpeg",
            },
            {
                timeText: "11:10 - 12:10 PM",
                title: "On Barren Plateaus and Cost Function Locality in Variational Quantum Algorithms",
                speaker: people[2],
                poster: "/images/posters/day1.jpeg",
            },
            {
                timeText: "2:00 - 3:00 PM",
                title: "IDK",
                speaker: people[4],
                poster: "/images/posters/day1.jpeg",
            },
            {
                timeText: "3:10 - 4:10 PM",
                title: "IDK",
                speaker: people[5],
                poster: "/images/posters/day1.jpeg",
            },
            {
                timeText: "4:30 - 5:30 PM",
                title: "IDK",
                speaker: people[1],
                poster: "/images/posters/day1.jpeg",
            },
        ]
    },
]

const registrationEnd = new Date(2022, 1, 21).getTime() // timestamp

const speakers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const staff = [1, 2, 3, 4, 5, 6]

const peopleMap = {}
for (let { id, ...props } of people) {
    peopleMap[id] = props
}

export async function requestForSpeakers(setSpeakers) {
    const res = []
    for (let id of speakers) {
        res.push({...peopleMap[id], id, moreInfo: true})
    }
    setSpeakers(res)
}

export function requestForStaff(setStaff) {
    const res = []
    for (let id of staff) {
        res.push({ ...peopleMap[id], id, moreInfo: false })
    }
    setStaff(res)
}

export async function requestForEvents(setEvents) {
    setEvents(events)
}

export async function requestForRegistrationEnd(setTime) {
    setTime(registrationEnd)
}

export function requestForPerson(id, setPerson) {
    // todo handle 404 here
    setPerson(peopleMap[+id])
}
