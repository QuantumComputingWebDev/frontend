import BriefAbout from "../components/BriefAbout";
import IntroSection from "../components/IntroSection";
import ScheduleSection from "../components/ScheduleSection";
import Speakers from "../components/Speakers";
import Staff from "../components/Staff";
import Spacer from "../components/Spacer";
import * as React from "react";

export default function Home() {
    return (
        <>
                <img src="/images/back-code.png" className="home-header-image"/>
                <div id="intro"><IntroSection id="intro" /></div>
                <Spacer space={5} />
                <div id="about"><BriefAbout /></div>
                <Spacer space={10} />
                <div id="timeline"><ScheduleSection id="timeline" /></div>
                <Spacer space={10} />
                <div id="speakers"><Speakers id="speakers" /></div>
                <Spacer space={10} />
                <div id="staff"><Staff id="staff" /></div>
                <Spacer space={10} />
                <img src="/images/back-ray.png" className="home-footer-image"/>
        </>
    );
}
