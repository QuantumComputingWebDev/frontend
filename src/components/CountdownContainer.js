import * as React from "react";
import {Box} from "@mui/material";
import {useTimer} from 'react-timer-hook';
import TimerStyled from "./Timer/TimerStyled";

export default function CountdownContainer({date}) {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp: date, onExpire: () => console.warn('onExpire called') });

    return (
        <Box sx={{ display: "flex", justifyContent: 'center'}}>
            <TimerStyled days={days} minutes={minutes} hours={hours} seconds={seconds} />
        </Box>
    )
}