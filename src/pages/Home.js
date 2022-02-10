import BriefAbout from "../components/BriefAbout";
import IntroSection from "../components/IntroSection";
import ScheduleSection from "../components/ScheduleSection";
import Companies from "../components/Companies";
import Speakers from "../components/Speakers";
import Staff from "../components/Staff";
import Spacer from "../components/Spacer";

export default function Home() {
    return (
        <>
            <div id="intro"><IntroSection id="intro" /></div>
            <Spacer space={5} />
            <div id="timeline"><ScheduleSection id="timeline" /></div>
            <Spacer space={10} />
            <div id="about"><BriefAbout /></div>
            <Spacer space={10} />
            <div id="speakers"><Speakers id="speakers" /></div>
            <Spacer space={10} />
            <div id="staff"><Staff id="staff" /></div>
            <Spacer space={10} />
            <div id="companies"><Companies id="companies" /></div>
            <Spacer space={5} />
        </>
    );
}
