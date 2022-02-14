import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin, faInstagram, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {Divider, Stack, Typography, useMediaQuery} from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";

function ContactItem({label, children}) {
    return (
        <Box sx={{ textAlign: "left", mb: 1}}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>{label}</Typography>
            {children}
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
        <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Box sx={{ display: "flex", justifyContent: "space-between", pb: 2}}>
                    <img
                        alt="daneshkade bargh"
                        src="/images/bargh.png"
                        style={{height: 70}}
                    />
                    <img
                        alt="daneshgah sharif"
                        src="/images/sharif.png"
                        style={{height: 70}}
                    />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", p:1}}>
                    <img
                        alt="daneshkade bargh"
                        src="/images/phanous.png"
                        style={{height: 45}}
                    />
                </Box>
            </Box>
        </Box>
    )
    const resanaBox = (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: 5
        }}
        >
            <Typography variant="h5" textAlign="center">Resana</Typography>
            <Stack>
                <ContactItem label="Address">
                    <Typography variant="p">
                        No. 8, 2nd Peyvand, Farhang Sq.
                        Saadatabad, Tehran, Iran"
                    </Typography>
                </ContactItem>
                <ContactItem label="Email">
                    <Typography variant="p">
                        Resana@ee.sharif.edu
                    </Typography>
                </ContactItem>
                <ContactItem label="Social Media">
                    <Box sx={{pt: 1}}>
                        <SocialItem link="https://t.me/react2021">
                            <FontAwesomeIcon icon={faTelegram} size="2x" className="hoverYellow" />
                        </SocialItem>
                        <SocialItem link="https://www.linkedin.com/company/eereact">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="hoverYellow" />
                        </SocialItem>
                        <SocialItem link="https://instagram.com/Resana_Association">
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="hoverYellow" />
                        </SocialItem>
                    </Box>
                </ContactItem>
            </Stack>
        </Box>
    )

    const phanousBox = (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: 5
        }}
        >
            <Typography variant="h5" textAlign="center">Phanous</Typography>
            <Stack>
                <ContactItem label="Address">
                    <Typography variant="p">
                        No. 8, 2nd Peyvand, Farhang Sq.
                        Saadatabad, Tehran, Iran"
                    </Typography>
                </ContactItem>
                <Divider />
                <ContactItem label="Email">
                    <Typography variant="p">
                        public@phanous.ir
                    </Typography>
                </ContactItem>
                <ContactItem label="Social Media">
                    <Box sx={{pt: 1}}>
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
                    <Grid item xs={6} md={4}>{phanousBox}</Grid>
                    {matches ? <Grid item xs={4}>{avatarBox}</Grid> : []}
                    <Grid item xs={6} md={4}>{resanaBox}</Grid>
                </Grid>
                {matches ? [] : avatarBox}
                <div>{copyRightBox}</div>
            </Container>
        </Box>
    )
}