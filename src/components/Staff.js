import IntroductoryCard from "./IntroductoryCard";
import {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import RainbowTypography from "./RainbowTypography";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper";
import {requestForStaff} from "../api/dummy";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Speakers() {
    const [staff, setStaff] = useState(null)
    useEffect(()=>requestForStaff(setStaff),[])
    if(!staff)
        return <div/>
    return (
        <Container sx={{ display: "fluid", justifyContent: "center" }}>
            <RainbowTypography variant="h1" textAlign="center" sx={{ pb: 5 }} color="secondary.light">Staff</RainbowTypography>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                autoplay={{ delay: 3000 }}
                loop={true}
                allowTouchMove={false}
                slidesPerView={1}
                speed={600}
                navigation
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                    },
                    750: {
                        slidesPerView: 3,
                    },
                    900: {
                        slidesPerView: 4,
                    }
                }}
            >
                {
                    staff.map(item =>(
                        <SwiperSlide>
                            <IntroductoryCard {...item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
    )
}