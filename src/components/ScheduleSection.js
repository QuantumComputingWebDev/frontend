import Box from "@mui/material/Box";
import CountdownContainer from "./CountdownContainer";
import {TimelineContainer} from "./TimelineContainer";
import {useEffect, useState} from "react";
import {requestForEvents} from "../api/dummy";

export default function ScheduleSection() {
    const [events, setEvents] = useState(null)
    useEffect(()=>requestForEvents(setEvents),[])

    return (
        <Box>
            <CountdownContainer date={Date.now() + 100000} />
            <TimelineContainer items={events || []} />
        </Box>
    )
}