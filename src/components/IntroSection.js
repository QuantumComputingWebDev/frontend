import "../styles/IntroSection.scss";
import FullCenterPage from "./FullCenterPage";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import RainbowTypography from "./RainbowTypography";
import {openRegisterDialog} from "./RegisterDialog";

export default function IntroSection() {
    return (
        <FullCenterPage sx={{opacity: 0.7}} className="intro-section-container">
            {/*<div className="atom-container">*/}
            {/*    <div><div /></div>*/}
            {/*    <div><div /></div>*/}
            {/*    <div><div /></div>*/}
            {/*    <div><div /></div>*/}
            {/*</div>*/}
            <Box sx={{ display: "flex", justifyContent: "center", spacing: 5 }}>
                <RainbowTypography className="growHover" variant="h2" sx={{p: 5}} component="a" href="/#about">About</RainbowTypography>
                <RainbowTypography className="growHover" variant="h2" sx={{p: 5}} onClick={openRegisterDialog}>Register</RainbowTypography>
            </Box>
        </FullCenterPage>
    )
}
