import {Card, CardMedia, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import "../styles/IntroductoryCard.css";
import {useNavigate} from "react-router-dom";

export default function IntroductoryCard({src, name, title, personId:id, moreInfo}) {
    const navigate = useNavigate();
    const url = `/people/${id}`
    const go = moreInfo ? ()=>{navigate(url); window.scrollTo(0, 0)} : null

    return (
        <div>
            <Box sx={{ boxShadow: 3 }}>
                <Card className="overlay-container" onClick={go}>
                    <CardMedia component="img" image={src} alt={name} />
                    <Box className={`overlay-content ${moreInfo ? "golden-overlay-content" : ""}`} sx={{ display: "flex", flexDirection: 'column-reverse' }}>
                        <Typography variant="h4" color="secondary.light">{title}</Typography>
                    </Box>
                </Card>
            </Box>
            {
                moreInfo ? <Typography variant="h5" sx={{ fontWeight: "bold" }} color="secondary.light" textAlign="center" className={"hoverYellow"} onClick={go}>{name}</Typography>
                :          <Typography variant="h5" sx={{ fontWeight: "bold" }} color="primary.light" textAlign="center">{name}</Typography>
            }
        </div>
    )
}
