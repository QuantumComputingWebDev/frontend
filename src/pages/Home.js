import {TimelineContainer} from "../components/TimelineContainer";
import {useEffect, useState} from "react";
import CountdownContainer from "../components/CountdownContainer";
import BriefAbout from "../components/BriefAbout";
import IntroSection from "../components/IntroSection";

function requestForItems(setItems) {
    const items = [
        {
            dateText: "04/2009 – 11/2010",
            title: "Start of Registeration",
            body: "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. " +
                "Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. " +
                "Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. " +
                "Adipisicing do qui duis Lore est."
        },
        {
            dateText: "05/2009 – 11/2010",
            title: "Start of Seminars",
            body: "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. " +
                "Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. " +
                "Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. " +
                "Adipisicing do qui duis Lore est."
        },
        {
            dateText: "06/2009 – 11/2010",
            title: "End of the program",
            body: "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. " +
                "Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. " +
                "Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. " +
                "Adipisicing do qui duis Lore est."
        }
    ]
    setItems(items)
}

export default function Home() {
    const [items, setItems] = useState(null)
    useEffect(()=>requestForItems(setItems),[])
    return (
        <>
            <IntroSection />
            <CountdownContainer date={Date.now() + 100000} />
            <TimelineContainer items={items || []} />
            <BriefAbout />
        </>
    );
}