import * as React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Staff from "./pages/Staff";
import theme from "./theme/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/staff" element={<Staff />} />
                        </Routes>
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;
