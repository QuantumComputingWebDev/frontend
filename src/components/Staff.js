import IntroductoryCard from "./IntroductoryCard";
import {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RainbowTypography from "./RainbowTypography";

function requestForStaff(setStaff) {
    const items = [
        {
            moreInfo: false,
            name: "Shayan",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg",
            id: 1
        },
        {
            moreInfo: false,
            name: "Shayan 2",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg",
            id: 1
        },
        {
            moreInfo: true,
            name: "Shayan 3",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg",
            id: 1
        },
        {
            moreInfo: true,
            name: "Shayan 4",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg",
            id: 1
        },
        {
            moreInfo: true,
            name: "Shayan 5",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg",
            id: 1
        },
        {
            moreInfo: true,
            name: "Shayan 6",
            title: "Poor Frontend Developer",
            src: "/images/sample-staff.jpeg",
            id: 1
        },
    ]
    setStaff(items)
}


export default function Speakers() {
    const [staff, setStaff] = useState(null)
    useEffect(()=>requestForStaff(setStaff),[])
    if(!staff)
        return <div/>
    return (
        <Container sx={{ display: "fluid", justifyContent: "center" }}>
            <RainbowTypography variant="h1" textAlign="center" sx={{ pb: 5 }} color="secondary.light">Staff</RainbowTypography>
            <Grid container spacing={5}>
                {
                    staff.map(item =>(
                        <Grid item sx={{ width: "14vw" }}>
                            <IntroductoryCard src={item.src} name={item.name} title={item.title} moreInfo={item.moreInfo} personId={item.id} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
