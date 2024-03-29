import Box from "@mui/material/Box";
import {Stack} from "@mui/material";

export default function FullCenterPage(props) {
    return (
        <Box component={Stack}
             {...props}
             direction="column"
             justifyContent="center"
             sx={{
                 minHeight: "100vh",
                 ...(props.sx || {})
             }}
        >
            {props.children}
        </Box>
    )
}
