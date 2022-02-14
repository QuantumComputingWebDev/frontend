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
    const initSx = {}
    if(!showNav) {
        initSx.opacity = 0;
    }
    return (
        <AppBar position="sticky" sx={{...initSx, transition: "1s ease"}}>
            {matches ? <DesktopNavbar /> : <MobileNavbar />}
        </AppBar>
    )

}