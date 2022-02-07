import {AppBar, Box, Toolbar, Typography, Button} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';
import Link from "@mui/material/Link";

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

// <Box sx={{ flexGrow: 1 }} >
//     <AppBar position="static" style={{ opacity: 0.6}}>
//         <Box sx={{ display: "flex", justifyContent: 'flex-end'}}>
//             <Toolbar>
//                 <Button variant="contained" component={RouterLink} sx={{p: 2, m : 1}} to="/">Home</Button>
//                 <Button variant="contained" component={RouterLink} sx={{p: 2, m : 1}} to="/about">About</Button>
//                 <Button variant="contained" component={RouterLink} sx={{p: 2, m : 1}} to="/register">Register</Button>
//                 <Button variant="contained" component={RouterLink} sx={{p: 2, m : 1}} to="/staff">Staff</Button>
//             </Toolbar>
//         </Box>
//     </AppBar>
// </Box>

export default function Navbar() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 1 }} />
                    <Link
                        component={RouterLink}
                        variant="h6"
                        underline="none"
                        color="inherit"
                        to="/"
                        sx={{ fontSize: 24 }}
                    >
                        {'Quantum Computing'}
                    </Link>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Link
                            component={RouterLink}
                            color="inherit"
                            variant="h6"
                            underline="none"
                            to="/about"
                            sx={rightLink}
                        >
                            {'About'}
                        </Link>
                        <Link
                            component={RouterLink}
                            color="inherit"
                            variant="h6"
                            underline="none"
                            to="/staff"
                            sx={rightLink}
                        >
                            {'Staff'}
                        </Link>
                        <Link
                            component={RouterLink}
                            color="inherit"
                            variant="h6"
                            underline="none"
                            to="/register"
                            sx={rightLink}
                        >
                            {'Register'}
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}
