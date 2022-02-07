import CountDown from "./CountDown";
import {Box, Button, Toolbar} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import * as React from "react";


export default function CountdownContainer({date}) {
    return (
        <Box sx={{ display: "flex", justifyContent: 'center'}}>
            <CountDown
                until={10}
                onFinish={() => alert('finished')}
                onPress={() => alert('hello')}
                size={20}
            />
        </Box>
    )
}