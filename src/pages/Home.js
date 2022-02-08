import {TimelineContainer} from "../components/TimelineContainer";
import {useEffect, useState} from "react";
import CountdownContainer from "../components/CountdownContainer";
import BriefAbout from "../components/BriefAbout";
import IntroSection from "../components/IntroSection";
import ScheduleSection from "../components/ScheduleSection";
import Sponsor from "../components/Sponsor";
import Speakers from "../components/Speakers";

export default function Home() {
    return (
        <>
            <IntroSection />
            <ScheduleSection />
            <BriefAbout />
            <Speakers />
            <Sponsor />
        </>
    );
}
