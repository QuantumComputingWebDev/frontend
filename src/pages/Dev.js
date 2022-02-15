import FullCenterPage from "../components/FullCenterPage";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import {Box, useMediaQuery} from "@mui/material";
import RainbowTypography from "../components/RainbowTypography";
import Spacer from "../components/Spacer";
import "../styles/dev.css";

function Person({name, src, size}) {
    return (
        <div>
            <RainbowTypography variant="h6" textAlign="center">
                {name}
            </RainbowTypography>
            <Box sx={{ display: "flex", justifyContent: "center"}} >
                <Avatar
                    alt={name}
                    src={src}
                    sx={{width: size, height: size}}
                />
            </Box>
        </div>
    )
}

export default function Dev() {
    const match = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const people = [
        { name: "Shayan Pardis", src:"/images/developers/shayan.jpeg" },
        { name: "?" },
        { name: "?" },
        { name: "Ali Salesi", src:"/images/developers/sales.jpeg" }
    ]

    return (
        <>
            <div>
                <RainbowTypography variant="h1" textAlign="center">Developers</RainbowTypography>
                <Spacer space={3} />
                {
                    match ?
                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                people.map(({name, src}, index)=>
                                    <div className={`person-${index+1} person`} key={index}>
                                        <Person index={index} name={name} src={src} size="15vw" />
                                    </div>
                                )
                            }
                        </Box>
                    :
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            {
                                people.map(({name, src}, index)=>
                                    <div className="person">
                                        <Person index={index} name={name} src={src} size="35vw" className={`person-${index+1} person`} key={index} />
                                        <Spacer space={3} />
                                    </div>
                                )
                            }
                        </Box>

                }
            </div>
            <Spacer space={10} />
        </>
    )
}