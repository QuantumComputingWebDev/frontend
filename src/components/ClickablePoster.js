import {useState} from "react";
import {Backdrop, Box} from "@mui/material";
import {Skeleton} from "@mui/lab";
import LazyLoad from 'react-lazyload';

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
                    <LazyLoad once offset={100} style={{ maxHeight: "90vh", maxWidth: "90vw"}} placeholder={<Skeleton style={{ width:"100%", height: "100%" }} />}>
                        <img src={poster} style={{ maxHeight: "90vh", maxWidth: "90vw"}} alt="poster" />
                    </LazyLoad>
                </Backdrop>
            }
        </>
    )
}