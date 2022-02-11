import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {Divider, Stack, Typography, useMediaQuery} from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";

function ContactItem({label, children}) {
    return (
        <Box sx={{ textAlign: "left", mb: 1}}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>{label}</Typography>
            <Typography variant="p">{children}</Typography>
        </Box>
    )
}
function SocialItem({link, children}) {
    return (
        <Link href={link} target="_blank"  rel="noopener noreferrer" sx={{px: 2}}>
            {children}
        </Link>
    )
}

export default function Footer() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const avatarBox = (
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Avatar
                alt="daneshkade bargh"
                src="/images/bargh.png"
                sx={{width: 80, height: 80, p: 1}}
            />
            <Avatar
                alt="daneshgah sharif"
                src="/images/sharif.png"
                sx={{width: 80, height: 80, p: 1}}
            />
        </Box>
    )
    const socialMediaBox = (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <Typography variant="h5" textAlign="center">Social Media</Typography>
            <Box sx={{pt: 4}}>
                <SocialItem link="https://twitter.com/phanous_ir">
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="hoverYellow" />
                </SocialItem>
                <SocialItem link="https://linkedin.com/company/phanous">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="hoverYellow" />
                </SocialItem>
                <SocialItem link="https://instagram.com/phanous_ir">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="hoverYellow" />
                </SocialItem>
            </Box>
        </Box>
    )

    const contactUsBox = (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: 5
        }}
        >
            <Typography variant="h5" textAlign="center">Contact Us</Typography>
            <Stack>
                <ContactItem label="Address">
                    {"No. 8, 2nd Peyvand, Farhang Sq."}
                    {"Saadatabad, Tehran, Iran"}
                </ContactItem>
                <Divider />
                <ContactItem label="Email">
                    public@phanous.ir
                </ContactItem>
            </Stack>
        </Box>
    )

    const copyRightBox = (
        <Typography variant="h6" textAlign="center" color="primary.light">
            Copyright © 2022
        </Typography>
    )

    return (
        <Box sx={{ backgroundColor: "primary.dark", color: "secondary.light", pb: 3, pt: 5}}>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={6} md={4}>{socialMediaBox}</Grid>
                    {matches ? <Grid item xs={4}>{avatarBox}</Grid> : []}
                    <Grid item xs={6} md={4}>{contactUsBox}</Grid>
                </Grid>
                {matches ? [] : avatarBox}
                <div>{copyRightBox}</div>
            </Container>
        </Box>
    )
}