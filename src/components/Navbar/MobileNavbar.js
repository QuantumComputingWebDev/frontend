import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import {useState} from "react";
import {openRegisterDialog} from "../RegisterDialog";
import Typography from "@mui/material/Typography";
import UpLink from "../UpLink";
import {AppBar, IconButton, ListItem} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from '@mui/icons-material/Menu';

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

export default function MobileNavbar() {
    const [open, setOpen] = useState(false)

    const toggleDrawer = (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpen(!open)
    };

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }} variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <StyledLink to="/" className="hoverYellow"><Typography variant="h6">Quantum Computing</Typography></StyledLink>
                </Toolbar>
            </AppBar>

            <div>
                <SwipeableDrawer
                    anchor={"left"}
                    open={open}
                    onClose={toggleDrawer}
                    onOpen={toggleDrawer}
                >
                    <Box
                        role="presentation"
                        onClick={toggleDrawer}
                        onKeyDown={toggleDrawer}
                    >
                        <List>
                            <ListItem>
                                <Button component={StyledScrollLink} href="/#intro" className="hoverYellow">Home</Button>
                            </ListItem>
                            <ListItem>
                                <Button component={StyledScrollLink} href="/#about" className="hoverYellow">About</Button>
                            </ListItem>
                            <ListItem>
                                <Button component={StyledScrollLink} href="/#speakers" className="hoverYellow">Speakers</Button>
                            </ListItem>
                            <ListItem>
                                <Button component={StyledScrollLink} href="/#staff" className="hoverYellow">Staff</Button>
                            </ListItem>
                            <ListItem>
                                <Button onClick={openRegisterDialog} className="hoverYellow">Register</Button>
                            </ListItem>
                        </List>
                    </Box>
                </SwipeableDrawer>
            </div>
        </div>
    );
}