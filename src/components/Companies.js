import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {Card, CardMedia, Stack} from "@mui/material";
import {useState} from "react";
import RainbowTypography from "./RainbowTypography";

export default function Companies() {
    const defaultInfo = "Thanks To";
    const [info, setInfo] = useState(defaultInfo)

    const Company = ({src, companyInfo})=>{
        return (
            <Card
                className="hoverBoxYellow"
                onMouseEnter={() => setInfo(companyInfo)}
                onMouseLeave={() => setInfo(defaultInfo)}
                sx={{ width: "22vw" }}
            >
                <CardMedia component="img" image={src} alt="sponser"/>
           </Card>
        )
    };

    return (
        <Container sx={{ display: "fluid", justifyContent: "center" }}>
            <RainbowTypography variant="h1" textAlign="center" sx={{ pb: 5 }} className="rainbow">{info}</RainbowTypography>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Company src="/images/sponser.svg" companyInfo="Sotoon"/>
                <Company src="/images/sponser.svg" companyInfo="Sotoon 2"/>
            </Box>
        </Container>
    )
}