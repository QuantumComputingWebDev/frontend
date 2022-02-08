import {Card, CardMedia, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../styles/IntroductoryCard.css";

export default function IntroductoryCard({src, name, title}) {
    return (
        <div>
            <Card className="overlay-container">
                <CardMedia component="img" image={src} alt={name} />
                <Box className="overlay-content" sx={{ display: "flex", flexDirection: 'column-reverse' }}>
                    <Typography variant="h4" color="primary.light">{title}</Typography>
                </Box>
            </Card>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} color="primary.light" textAlign="center">{name}</Typography>
        </div>
    )
}
