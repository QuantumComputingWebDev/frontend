import Box from "@mui/material/Box";

export default function Spacer({space}) {
    return <Box sx={{width: "100%", height: "10px", pt: space, pb: space }} />
}