import {useState} from "react";
import {Backdrop, Box} from "@mui/material";

export default function ClickablePoster({children, inside}) {
    const [clicked, setClicked] = useState(false)
    const openCard = ()=>setClicked(true)
    const closeCard = ()=>setClicked(false)
    return (
        <>
            <Box onClick={openCard}>
                {children}
            </Box>
            {
                clicked &&
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={clicked}
                    onClick={closeCard}
                >
                    {inside}
                </Backdrop>
            }
        </>
    )
}