import axios from "axios";
import { throwError } from "../components/Error/ErrorSnackbar";

const apiPrefix = "/api/v1";

async function get(url) {
    const response = await axios(`${apiPrefix}${url}`)
    if(response.status >= 300 || response.status < 200) {
        const text = response.text();
        throwError(text);
    }
    return response.data;
}

function parsePerson({photo, poster, ...other}) {
    return {
        ...other,
        src: photo && photo.path,
        posterSrc: poster && poster.path
    }
}

export async function requestForSpeakers(setSpeakers) {
    const speakers = (await get(`/person/speaker`)).map(parsePerson).map(person=>({...person, moreInfo: true}))
    setSpeakers(speakers)
}

export async function requestForStaff(setStaff) {
    const staff = (await get(`/person/staff`)).map(parsePerson).map(person=>({...person, moreInfo: false}));
    setStaff(staff)
}

export async function requestForEvents(setEvents) {
    const events = (await get(`/event`)).map((event, index)=>{
        console.log(event)
        const date = new Date(event.date)
        return {
            dayCount: index + 1,
            dateText: `${date.toLocaleDateString('en-US', {month: 'long'})}, ${date.toLocaleDateString('en-US', {weekday: 'long'})} ${date.getDate()}`,
            eventPoster: event.poster && event.poster.path,
            events: !event.speechs ? [] : event.speechs.map(e=>({
                timeText: `${e.startTime} - ${e.endTime}`,
                title: e.title,
                speaker: parsePerson(e.speaker),
                briefDescription: e.briefDescription,
                description: e.description,
                poster: e.poster && e.poster.path
            }))
        }
    })
    setEvents(events)
}

export async function requestForRegistrationEnd(setTime) {
    const registrationEnd = new Date(2022, 1, 21, 12, 30, 0).getTime()
    setTime(registrationEnd)
}

export async function requestForPerson(id, setPerson) {
    const person = parsePerson(await get(`/person/${id}`));
    setPerson(person)
}
