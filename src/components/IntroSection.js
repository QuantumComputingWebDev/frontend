import "../styles/IntroSection.scss";
import FullCenterPage from "./FullCenterPage";
import {Box} from "@mui/material";
import RainbowTypography from "./RainbowTypography";
import {openRegisterDialog} from "./RegisterDialog";
import Typography from "@mui/material/Typography";

function Title(props) {
    return (
        <Typography
            variant="h1"
            underline="none"
            color="inherit"
            sx={{ ...props.sx, fontFamily: "incomplete"}}
            style={{textDecoration: "none"}}
            textAlign="center"
            href="/#about"
        >
            {props.children}
        </Typography>
    )
}

export default function IntroSection() {
    return (
        <FullCenterPage className="intro-section-container">
            <div onClick={()=>window.location.href="/#about"}>
                <div className="glow">
                    <Title sx={{color: "secondary.light"}}>Quantum</Title>
                    <Title sx={{color: "secondary.main"}}>Machine</Title>
                    <Title sx={{color: "secondary.dark"}}>Learning</Title>
                </div>
            </div>
            <div className="atom-container">
                <div><div /></div>
                <div><div /></div>
                <div><div /></div>
                <div><div /></div>
            </div>
            <Box sx={{ display: "flex", justifyContent: "center", spacing: 5 }}>
                <RainbowTypography className="growHover" variant="h2" sx={{p: 5}} component="a" href="/#about">About</RainbowTypography>
                <RainbowTypography className="growHover" variant="h2" sx={{p: 5}} onClick={openRegisterDialog}>Register</RainbowTypography>
            </Box>
        </FullCenterPage>
    )
}
