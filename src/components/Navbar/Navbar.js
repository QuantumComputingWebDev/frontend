import {AppBar, useMediaQuery} from "@mui/material";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import {useState} from "react";

export default function Navbar() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const [showNav, setShowNav] = useState(false)
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 10) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    })
    const backgroundSx = {}
    if(!showNav) {
        backgroundSx.backgroundColor = "transparent"
    }
    return (
        <AppBar position="sticky" sx={{...backgroundSx, transition: "1s ease"}}>
            {matches ? <DesktopNavbar /> : <MobileNavbar />}
        </AppBar>
    )

}