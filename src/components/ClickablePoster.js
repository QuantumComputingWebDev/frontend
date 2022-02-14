import {useState} from "react";
import {Backdrop, Box} from "@mui/material";

export default function ClickablePoster({children, poster}) {
    const [clicked, setClicked] = useState(false)
    const openCard = ()=>setClicked(true)
    const closeCard = ()=>setClicked(false)
    return (
        <>
            <Box onClick={openCard}>
                {children}
            </Box>
            {
                poster &&
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, overflow: "scroll"}}
                    open={clicked}
                    onClick={closeCard}
                >
                    <img src={poster} style={{ maxHeight: "90vh", maxWidth: "90vw"}} alt="poster" />
                </Backdrop>
            }
        </>
    )
}