import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PersonInfo from "../components/PersonInfo";
import FullCenterPage from "../components/FullCenterPage";

function requestForPerson(setPerson) {
    const item = {
        name: "Shayan Pardis",
        about: "Shayan is now a web programmer<br>Shayan does not like frontend<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        src: "/images/sample-staff.jpeg",
        title: "Web Developer",
        id: 2,
        more: "http://shayan-p.github.io/"
    }
    setPerson(item)
    console.log("SHOULD BE SET BY NOW")
}

export default function People() {
    let { id }  = useParams()

    const [person, setPerson] = useState(null)
    useEffect(()=>requestForPerson(setPerson),[id])

    if(!person)
        return <div/>

    return (
        <FullCenterPage>
            <PersonInfo {...person} />
        </FullCenterPage>
    )
}
