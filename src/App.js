import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import theme from "./theme/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Footer from "./components/Footer";
import {ErrorBoundary} from "./components/Error/ErrorBoundary";
import {ErrorSnackbar} from "./components/Error/ErrorSnackbar";
import RegisterDialog from "./components/RegisterDialog";
import {RecoilRoot} from "recoil";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

import SwiperCore, { Autoplay } from 'swiper'
import {useEffect} from "react";
import Spacer from "./components/Spacer";

function config() {
    SwiperCore.use([Autoplay])
}

function App() {
    useEffect(config, [])

    return (
        <div style={{position: "relative"}} className="container">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <RecoilRoot>
                        <Navbar />
                        <ErrorBoundary><ErrorSnackbar>
                            <RegisterDialog />
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route exact path="/people/:id" element={<People />} />
                                <Route exact path="/about" element={<About />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </ErrorSnackbar></ErrorBoundary>
                        <Footer />
                    </RecoilRoot>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;
