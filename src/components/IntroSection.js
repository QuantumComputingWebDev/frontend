import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Stack} from "@mui/material";
import "../styles/IntroSection.scss";

export default function IntroSection() {
    return (
        <Box component={Stack}
               direction="column"
               justifyContent="center"
               sx={{
                   height: "100vh",
                   opacity: 0.7,
               }}
               className="intro-section-container"
        >
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
        </Box>
    )
}
