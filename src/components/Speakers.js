import IntroductoryCard from "./IntroductoryCard";
import {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function requestForSpeakers(setSpeakers) {
    const items = [
        {
            name: "Shayan",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
        {
            name: "Shayan 2",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
        {
            name: "Shayan 3",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
        {
            name: "Shayan 4",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
        {
            name: "Shayan 5",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
        {
            name: "Shayan 6",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
        {
            name: "Shayan 7",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
        {
            name: "Shayan 8",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
        {
            name: "Shayan 9",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
        {
            name: "Shayan",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
        {
            name: "Shayan",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg"
        },
    ]
    setSpeakers(items)
}


export default function Speakers() {
    const [speakers, setSpeakers] = useState(null)
    useEffect(()=>requestForSpeakers(setSpeakers),[])
    if(!speakers)
        return <div></div>
    return (
        <Container sx={{ pt: 10 }}>
            <Typography variant="h1" textAlign="center" sx={{ pb: 5 }} color="secondary.light">Speakers</Typography>
            <Grid container spacing={8}>
                {
                    speakers.map(item =>(
                        <Grid item sx={{ width: "15vw" }}>
                            <IntroductoryCard src={item.src} name={item.name} title={item.title} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
