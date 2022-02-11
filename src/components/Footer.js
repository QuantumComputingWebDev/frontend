import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {Divider, Stack, Typography, useMediaQuery} from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";

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
    const matches = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <Box sx={{ backgroundColor: "primary.dark", color: "secondary.light", pb: 3, pt: 5}}>
            <Grid container spacing={2} >
                <Grid item xs={4}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        px: 5
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
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ display: "flex", justifyContent: "center"}}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: matches ? "column" : "row"}}>
                            <Avatar
                                alt="daneshkade bargh"
                                src="/images/bargh.png"
                                sx={{width: 90, height: 90, p: 1}}
                            />
                            <Avatar
                                alt="daneshgah sharif"
                                src="/images/sharif.png"
                                sx={{width: 90, height: 90, p: 1}}
                            />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
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
                </Grid>
            </Grid>
            <div>
                <Typography variant="h6" textAlign="center" color="primary.light">
                    Copyright © 2022
                </Typography>
            </div>
        </Box>
    )
}