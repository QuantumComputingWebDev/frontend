const people = [
    {
        name: "Ali Hamed Moosavian",
        title: "title",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Ali Hamed Moosavian.jpg",
        more: "https://linkedin.com/",
        id: 1,
    },
    {
        name: "Aram Harrow",
        title: "title",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Aram Harrow.jpg",
        more: "https://linkedin.com/",
        id: 2,
    },
    {
        name: "Jacob Biamonte",
        title: "title",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Jacob Biamonte.jpeg",
        more: "https://linkedin.com/",
        id: 3,
    },
    {
        name: "Leila Taghavi",
        title: "title",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Leila Taghavi.png",
        more: "https://linkedin.com/",
        id: 4,
    },
    {
        name: "Min-Hsiu Hsieh",
        title: "title",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Min-Hsiu Hsieh.png",
        more: "https://linkedin.com/",
        id: 5
    },
    {
        name: "Richard Kueng",
        title: "title",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/Richard Kueng.jpg",
        more: "https://linkedin.com/",
        id: 6,
    },
    {
        name: "Saleh Rahimi Keshari",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        title: "title",
        src: "/images/Saleh Rahimi Keshari.png",
        more: "https://linkedin.com/",
        id: 7,
    },
    {
        name: "Vedran Dunjiko",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        title: "title",
        src: "/images/Vedran Dunjko.jpg",
        more: "https://linkedin.com/",
        id: 8,
    },

]

const speakers = [1, 2, 3, 4, 5, 6, 7, 8]
const staff = [1, 2, 3, 4, 5, 6, 7, 8]

const peopleMap = {}
for(let {id, ...props} of people) {
    peopleMap[id] = props
}

export async function requestForSpeakers(setSpeakers) {
    const res = []
    for(let id of speakers) {
        const {name, title, src} = peopleMap[id]
        res.push({name, title, src, id, moreInfo: true})
    }
    setSpeakers(res)
}

export function requestForStaff(setStaff) {
    const res = []
    for(let id of staff) {
        const {name, title, src} = peopleMap[id]
        res.push({name, title, src, id, moreInfo: true})
    }
    setStaff(res)
}

export async function requestForEvents(setEvents) {
    const items = [
        {
            dateText: "04/2009 – 11/2010",
            title: "Start of Registeration",
            body: "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. " +
                "Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. " +
                "Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. " +
                "Adipisicing do qui duis Lore est."
        },
        {
            dateText: "05/2009 – 11/2010",
            title: "Start of Seminars",
            body: "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. " +
                "Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. " +
                "Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. " +
                "Adipisicing do qui duis Lore est."
        },
        {
            dateText: "06/2009 – 11/2010",
            title: "End of the program",
            body: "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. " +
                "Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. " +
                "Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. " +
                "Adipisicing do qui duis Lore est."
        }
    ]
    setEvents(items)
}

export function requestForPerson(id, setPerson) {
    // todo handle 404 here
    setPerson(peopleMap[+id])
}
