import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { isRegisterDialogOpen } from "../state/recoilState";
import {useState} from "react";
import {throwError} from "./Error/ErrorSnackbar";
import Paper from "@mui/material/Paper";

let lastOpen, lastSetOpen;

export function openRegisterDialog() {
    lastSetOpen(true)
}

function closeRegisterDialog() {
    lastSetOpen(false)
}

export default function RegisterDialog() {
    const [open, setOpen] = useRecoilState(isRegisterDialogOpen)
    const [email, setEmail] = useState("")

    lastOpen = open;
    lastSetOpen = setOpen;

    let emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const ok = emailRegex.test(email)
    function submitRegisterDialog() {
        if(ok) {
            window.location = "https://www.google.com"; // this is the redirecting url
        } else {
            throwError("email is not valid!")
        }
    }

    return (
        <Dialog open={open} onClose={closeRegisterDialog}>
            <DialogTitle>Register</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography variant="p">
                        After entering your email you will be redirected to another page to finish your registration.
                    </Typography>
                    <br />
                    <Typography variant="p">
                        Then, you will receive confirmation email from us that contains instructions and link to enter the seminars.
                    </Typography>
                    <br />
                    <Typography variant="p" color="warning.main">
                        Make sure to enter the correct email!
                    </Typography>
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    error={!ok}
                    onChange={e=>setEmail(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={submitRegisterDialog}>Continue</Button>
            </DialogActions>
        </Dialog>
    )
}