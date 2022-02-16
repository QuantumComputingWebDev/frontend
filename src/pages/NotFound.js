import RainbowTypography from "../components/RainbowTypography";
import UpLink from "../components/UpLink";
import FullCenterPage from "../components/FullCenterPage";

export default function NotFound() {
    return (
        <FullCenterPage>
            <RainbowTypography variant="h1" textAlign="center">404 Not Found</RainbowTypography>
            <RainbowTypography variant="h6" textAlign="center">
                Lets get you
                <UpLink
                    to="/"
                    style={{
                        background: "red",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                > back</UpLink>
            </RainbowTypography>
        </FullCenterPage>
    )
}