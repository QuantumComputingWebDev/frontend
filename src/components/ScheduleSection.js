import Box from "@mui/material/Box";
import CountdownContainer from "./CountdownContainer";
import {TimelineContainer} from "./TimelineContainer";
import {useEffect, useState} from "react";
import {requestForEvents, requestForRegistrationEnd} from "../api/dummy";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import RainbowTypography from "./RainbowTypography";
import Spacer from "./Spacer";
import Typography from "@mui/material/Typography";

export default function ScheduleSection() {
    const [events, setEvents] = useState(null)
    const [countDownTime, setCountDownTime] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(()=>requestForEvents(setEvents),[])
    useEffect(()=>requestForRegistrationEnd(setCountDownTime),[])

    if(events === null || countDownTime === null)
        return <></>

    return (
        <Box>
            <Typography variant="h3" sx={{ color: "secondary.main", p: 2}} textAlign="center">Registration Ends In:</Typography>
            <CountdownContainer date={countDownTime} />
            <Spacer space={4} />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    {events.map((day, index)=>(
                        <Button
                            onClick={()=>setActiveIndex(index)}
                            variant={index === activeIndex ? "contained" : "outlined"}
                        >Day #{day.dayCount}</Button>
                    ))}
                </ButtonGroup>
            </Box>
            <RainbowTypography variant="h2" textAlign="center">{events[activeIndex].dateText}</RainbowTypography>
            <TimelineContainer items={events[activeIndex].events} />
        </Box>
    )
}