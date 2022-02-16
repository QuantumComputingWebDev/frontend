import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import RainbowTypography from "./RainbowTypography";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ResponsiveLargeHeader from "./ResponsiveLargeHeader";

function Paragraph({title, html, children, insideProps}) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", pb: 5}}>
            <Typography textAlign="center" variant="h3" sx={{ color: "secondary.main" }}>{title}</Typography>
            <Typography
                color="primary.light"
                style={{lineHeight: 2, fontSize: "1.4em"}}
                dangerouslySetInnerHTML={{__html: html}}
                {...(insideProps || {})}
            />
            {children}
        </Box>
    )
}

export default function PersonInfo({name, about, src, title, id, link}) {
    return (
        <Container>
            <ResponsiveLargeHeader title={name} subtitle={title} src={src} />
            {
                about && <Paragraph title="About" html={about}>
                    {
                        link && <Typography variant="h6" textAlign="center"><Link href={link}>More
                            About {name}</Link></Typography>
                    }
                </Paragraph>
            }
        </Container>
    )
}