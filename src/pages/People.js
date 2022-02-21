import {useParams} from "react-router-dom";
import {requestForPerson} from "../api/api";
import {useEffect, useState} from "react";
import FullCenterPage from "../components/FullCenterPage";
import {Box, CircularProgress} from "@mui/material";
import PersonInfo from "../components/PersonInfo";

export default function People() {
    const {id} = useParams()
    const [person, setPerson] = useState(null)
    useEffect(()=>requestForPerson(id, setPerson), [id])
    if(person === null)
        return <FullCenterPage><Box sx={{ display: "flex", justifyContent: "center"}}><CircularProgress /></Box></FullCenterPage>
    return (
        <FullCenterPage>
            <PersonInfo {...person} />
        </FullCenterPage>
    )
}