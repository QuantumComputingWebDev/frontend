import {useMediaQuery} from "@mui/material";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
    return matches ? <DesktopNavbar /> : <MobileNavbar />
}