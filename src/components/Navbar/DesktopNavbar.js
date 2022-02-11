import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {AppBar} from "@mui/material";
import {openRegisterDialog} from "../RegisterDialog";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UpLink from "../UpLink";

const rightLink = {
    color: 'common.white',
    ml: 3,
};

function StyledScrollLink(props) {
    return <Typography
        component="a"
        underline="none"
        color="inherit"
        sx={{ fontSize: 24 }}
        style={{textDecoration: "none"}}
        {...props}
    >
        {props.children}
    </Typography>
}

function StyledLink(props) {
    return <UpLink
        underline="none"
        color="inherit"
        style={{textDecoration: "none"}}
        onClick={()=>window.scrollTo(0, 0)}
        {...props}
    >
        {props.children}
    </UpLink>
}

export default function DesktopNavbar() {
    return (
        <AppBar position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between' }} variant="dense">
                <Box sx={{ flex: 1 }} />
                <StyledLink to="/" className="hoverYellow"><Typography variant="h6">Quantum Computing</Typography></StyledLink>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button component={StyledScrollLink} href="/#intro" sx={rightLink} className="hoverYellow">Home</Button>
                    <Button component={StyledScrollLink} href="/#about" sx={rightLink} className="hoverYellow">About</Button>
                    <Button component={StyledScrollLink} href="/#speakers" sx={rightLink} className="hoverYellow">Speakers</Button>
                    <Button component={StyledScrollLink} href="/#staff" sx={rightLink} className="hoverYellow">Staff</Button>
                    <Button onClick={openRegisterDialog} sx={rightLink} className="hoverYellow">Register</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
