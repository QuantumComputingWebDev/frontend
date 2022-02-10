import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PersonInfo from "../components/PersonInfo";
import FullCenterPage from "../components/FullCenterPage";
import {requestForPerson} from "../api/dummy";

export default function People() {
    let { id }  = useParams()

    const [person, setPerson] = useState(null)
    useEffect(()=>requestForPerson(id, setPerson),[id])

    if(!person)
        return <div/>

    return (
        <FullCenterPage>
            <PersonInfo {...person} />
        </FullCenterPage>
    )
}
