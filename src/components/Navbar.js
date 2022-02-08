import {Link as RouterLink} from 'react-router-dom';
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {AppBar} from "@mui/material";

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

function StyledLink(props) {
    return <Link
        component={RouterLink}
        variant="h6"
        underline="none"
        color="inherit"
        sx={{ fontSize: 24 }}
        className="hoverYellow"
        {...props}
    >
        {props.children}
    </Link>
}

export default function Navbar() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 1 }} />
                    <StyledLink to="/">Quantum Computing</StyledLink>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <StyledLink to="/about" sx={rightLink}>About</StyledLink>
                        <StyledLink to="/staff" sx={rightLink}>Staff</StyledLink>
                        <StyledLink to="/register" sx={rightLink}>Register</StyledLink>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}
