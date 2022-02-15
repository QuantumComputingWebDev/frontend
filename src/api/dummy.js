const people = [
    {
        name: "Ali Hamed Moosavian",
        title: "Researcher at QuOne Lab at Phanous Research and Innovation Centre",
        // about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Ali Hamed Moosavian.jpg",
        // link: "https://linkedin.com/",
        posterSrc: `/images/posters/Ali Hamed Moosavian intro.jpeg`,
        id: 1,
    },
    {
        name: "Aram Harrow",
        title: "Associate Professor of Center for Theoretical Physics Massachusetts Institute of Technology",
        // about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Aram Harrow.jpg",
        // link: "https://linkedin.com/",
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
        // link: "https://linkedin.com/",
        posterSrc: `/images/posters/Jacob Biamonte intro.jpeg`,
        id: 3,
    },
    {
        name: "Leila Taghavi",
        title: "Postdoctoral Researcher at Phanous Research and Innovation Centre",
        // about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Leila Taghavi.png",
        // link: "https://linkedin.com/",
        posterSrc: `/images/posters/Leila Taghavi intro.jpeg`,
        id: 4,
    },
    {
        name: "Min-Hsiu Hsieh",
        title: "Director at Hon Hai (Foxconn) Quantum Computing Research Center, Taiwan",
        // about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Min-Hsiu Hsieh.png",
        // link: "https://linkedin.com/",
        posterSrc: `/images/posters/Min-Hsiu Hsieh intro.jpeg`,
        id: 5
    },
    {
        name: "Richard Kueng",
        title: "assistant professor (tenure track) for Quantum Computing at the Johannes Kepler University Linz, Austria",
        // about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Richard Kueng.jpg",
        // link: "https://linkedin.com/",
        posterSrc: `/images/posters/Richard Kueng intro.jpeg`,
        id: 6,
    },
    {
        name: "Saleh Rahimi Keshari",
        // about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        title: "Assistant Professor at University of Tehran",
        src: "/images/Saleh Rahimi Keshari.png",
        // link: "https://linkedin.com/",
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
        // link: "https://linkedin.com/",
        posterSrc: `/images/posters/Vedran Dunjko intro.jpeg`,
        id: 8,
    },
    {
        name: "Amir Najafi",
        // about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        title: "Postdoctoral Researcher, Institute for Research in Fundamental Sciences (IPM)",
        src: "/images/Ali Najafi.jpg",
        // link: "https://linkedin.com/",
        posterSrc: `/images/posters/Amir Najafi intro.jpeg`,
        id: 9,
    },
    {
        name: "Abolfazl Bayat",
        // about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        title: "Research Associate at University College London",
        src: "/images/Abolfazl Bayat.png",
        // link: "https://linkedin.com/",
        posterSrc: `/images/posters/Abolfazl Bayat intro.jpeg`,
        id: 10,
    },

    {
        name: "Mohammad Ghafoorian",
        src: "/images/Mohammad Ghafoorian.jpeg",
        id: 11,
    },

    {
        name: "Mostafa Azari",
        src: "/images/Mostafa Azari.jpeg",
        id: 12,
    },

    {
        name: "Alireza Taghikhani",
        src: "/images/Alireza Taghikhani.jpeg",
        id: 13,
    },

    {
        name: "Ali Akbari",
        src: "/images/Ali Akbari.jpeg",
        id: 14,
    },

    {
        name: "Parsa Sarmad",
        src: "/images/Parsa Sarmad.jpeg",
        id: 15,
    },

    {
        name: "Parsa Asemi Nia",
        src: "/images/Parsa Asemi Nia.jpeg",
        id: 16
    },

    {
        name: "Mystery Speaker",
        src: "/images/Mystery Speaker.jpeg",
        id: 17
    }
]

const events = [
    {
        dayCount: 1,
        dateText: "Tuesday, February 22",
        eventPoster: "/images/posters/day1.jpeg",
        events: [
            {
                timeText: "2:00 - 3:00 PM",
                title: "Introduction to Quantum Computation",
                speaker: people[6],
                briefDescription: "From qubits to quantum gates and measurements, discussing one quantum algorithm as an example, this talk provides information about using quantum to perform computational tasks faster.",
                description: "It is strongly believed that quantum computers can perform certain computational tasks much faster than classical computers. In this talk, I will review basic elements of the circuit model of quantum computation, from qubits to quantum gates and measurements. To further illustrate the model, I will discuss a quantum algorithm as an example.",
                poster: "/images/posters/event1_1.jpeg",
            },
            {
                timeText: "3:10 - 4:10 PM",
                title: "Introduction to Classical Machine Learning",
                speaker: people[8],
                briefDescription: "As it walks through the history of Machine Learning (ML), this lecture provides some practical examples of recent achievements in this field such as successful NLP systems.",
                description: "Over the past several years, Machine Learning (ML) has become a popular subject both within and outside of the scientific community. It can be briefly defined as enabling computers to make successful predictions using past experiences. Recently, ML has exhibited an impressive development due to the help of the rapid increase in the storage capacity and processing power of computers. In this talk, I will give a brief introduction to classical machine learning and the story of its evolution from simple programmable rules in the 1950s to the gigantic neural networks that have been transforming our lives for the past decade. In particular, a number of recent achievements in the field of Natural Language Processing (NLP) will be briefly reviewed as some practical examples. In addition, I will also go through a series of theoretical advancements in this field, and highlight the role of statistics in providing provable guarantees on the performance of ML frameworks.\n" +
                    "This talk is aimed for the general audience with no particular prior knowledge regarding ML or its subfields.",
                poster: "/images/posters/event1_2.jpeg",
            },
            {
                timeText: "4:30 - 5:30 PM",
                title: "Recent Trends in Machine Learning",
                speaker: people[16],
                briefDescription: "",
                description: "In this talk, we present a few of the recent research trends in machine learning. We first explain, at a high level, a few basic and well-studied problems in machine learning such as clustering, online learning, and feature engineering. Next, we introduce a few challenges in using the classical solutions to these problems in the modern era, such as scalability and transparency. We proceed by presenting some of the new results and techniques to deal with these challenges. Along the way, we propose some open problems in this context.",
                poster: "/images/posters/event1_3.jpeg",
            },
        ]
    },
    {
        dayCount: 2,
        dateText: "Wednesday, February 23",
        eventPoster: "/images/posters/day2.jpeg",
        events: [
            {
                timeText: "10:00 AM - 12:10 PM",
                title: "Variational Quantum - Classical Algorithms",
                speaker: people[9],
                briefDescription: "Pointing out variational quantum-classical algorithms as the most promising approach for achieving quantum advantage, Dr. Bayat explores their applications across various subjects and introduces VQE algorithm, as one of the most widely used variational methods.",
                description: "Variational quantum-classical algorithms are the most promising approach for achieving quantum advantage. In the first lecture, we will explain the variational quantum-classical algorithms from a general perspective and explore their applications across various subjects. In the second lecture, by focusing on the Variational Quantum Eigensolver (VQE) algorithm, as one of the most widely used variational methods, we try to give a detailed picture about challenges and possible solutions for achieving quantum advantage.",
                poster: "/images/posters/event2_1.jpeg",
            },
            {
                timeText: "2:00 - 4:10 PM",
                title: "Quantum Machine Learning of Classical Data",
                speaker: people[3],
                briefDescription: "In this talk we study the basic notation of quantum machine learning and discuss data encoding as the first step in QML. Finally, we talk about different ways of data encoding.",
                description: "In a world where the total amount of data is increasing rapidly, there are hopes that quantum computers can help in processing and interpreting these data more rapidly. We talk about the basic notation of quantum machine learning and discuss the first step in a quantum machine learning algorithm in processing classical data, which is the data encoding. We review some known algorithms for encoding the classical data into a quantum state and argue about their costs and benefits.",
                poster: "/images/posters/event2_2.jpeg",
            },
            {
                timeText: "4:30 - 5:30 PM",
                title: "Adiabatic Quantum Machine Learning",
                speaker: people[0],
                briefDescription: "After introducing Adiabatic Quantum Machine Learning, we'll talk about Quantum Annealing and QAOA as examples of generic quantum optimization algorithms.",
                description: "In this short lecture, we will start by reviewing the adiabatic theorem in quantum mechanics. Utilizing the adiabatic theorem we'll develop a generic quantum optimization algorithm, i.e. Quantum Annealing. We'll also show how this is related to another generic optimization algorithm known as QAOA. We'll conclude by discussing some of the recent results that bound the power of Quantum Annealing.",
                poster: "/images/posters/event2_3.jpeg",
            }
        ]
    },
    {
        dayCount: 3,
        dateText: "Thursday, February 24",
        eventPoster: "/images/posters/day3.jpeg",
        events: [
            {
                timeText: "10:00 - 11:00 AM",
                title: "Beyond Quantum Kernels, Beyond Supervised Learning",
                speaker: people[7],
                briefDescription: "Introducing Parametrized Quantum Circuits (PQCs) as means to achieve QML, this talk revolves around new applications of PQCs in Reinforcement Learning (RL) which is the closest branch of machine learning to AI.",
                description: "In this talk we will reflect on two new results in which we provide a new systematisation of PQCs as models for supervised learning, showing provable advantages of going beyond the well-known kernel-based perspective and approaches. \n" +
                    "In the second part of the talk, we will discuss new applications of PQCs in the context of  the third main branch of machine learning - reinforcement learning (RL). RL is arguably closest to AI, and which is at the core of the celebrated AlphaGo results.",
                poster: "/images/posters/event3_1.jpeg",
            },
            {
                timeText: "11:10 AM - 12:10 PM",
                title: "On Barren Plateaus and Cost Function Locality in Variational Quantum Algorithms",
                speaker: people[2],
                briefDescription: "In this talk, we will give an overview of the barren plateaus phenomenon and report on recent results relating the behavior of the gradients to the causal cone structure of the quantum circuit.",
                description: "Variational quantum algorithms rely on gradient based optimization to iteratively minimize a cost function evaluated by measuring output(s) of a quantum processor. A barren plateau is the phenomenon of exponentially vanishing gradients in sufficiently expressive parametrized quantum circuits. It has been established that the onset of a barren plateau regime depends on the cost function, although the particular behavior has been demonstrated only for certain classes of cost functions. In this talk, we will give an overview of the barren plateaus phenomenon and report on our recent results relating the behavior of the gradients to the causal cone structure of the quantum circuit.",
                poster: "/images/posters/event3_2.jpeg",
            },
            {
                timeText: "2:00 - 3:00 PM",
                title: "Advanced Topics in Quantum Machine Learning",
                speaker: people[4],
                briefDescription: "",
                poster: "/images/posters/event3_3.jpeg",
            },
            {
                timeText: "3:10 - 4:10 PM",
                title: "Advanced Topics in Quantum Machine Learning",
                speaker: people[5],
                briefDescription: "",
                poster: "/images/posters/event3_4.jpeg",
            },
            {
                timeText: "4:30 - 5:30 PM",
                title: "Advanced Topics in Quantum Machine Learning",
                speaker: people[1],
                briefDescription: "",
                poster: "/images/posters/event3_5.jpeg",
            },
        ]
    },
]

const registrationEnd = new Date(2022, 1, 21).getTime() // timestamp

const speakers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17]
const staff = [11, 12, 13, 14, 15, 16]

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
