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
import Link from "@mui/material/Link";
import ClickableImagePoster from "./ClickableImagePoster";

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
            {
                events[activeIndex].eventPoster ?
                    <ClickableImagePoster poster={events[activeIndex].eventPoster}>
                        <Link variant="h2" textAlign="center" component={RainbowTypography}
                              className="big-link">{events[activeIndex].dateText}</Link>
                    </ClickableImagePoster>
                    :
                    <RainbowTypography variant="h2" textAlign="center">{events[activeIndex].dateText}</RainbowTypography>
            }
            <Spacer space={2} />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    {events.map((day, index)=>(
                        <Button
                            onClick={()=>setActiveIndex(index)}
                            variant={index === activeIndex ? "contained" : "outlined"}
                            sx={{ color:"#00F6FF" }}
                        >Day #{day.dayCount}</Button>
                    ))}
                </ButtonGroup>
            </Box>
            <TimelineContainer items={events[activeIndex].events} />
        </Box>
    )
}