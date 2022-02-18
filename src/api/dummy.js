import axios from "axios";
import { throwError } from "../components/Error/ErrorSnackbar";

const apiPrefix = "/api/v1";

async function get(url) {
    const response = await axios(`${apiPrefix}${url}`)
    if(response.status >= 300 || response.status < 200) {
        const text = response.text();
        throwError(text);
    }
    return response;
}

export async function requestForSpeakers(setSpeakers) {
    const res = await get(`/person/speaker`);
    const speakers = res.json();
    setSpeakers(speakers)
}

export async function requestForStaff(setStaff) {
    const res = await get(`/person/staff`);
    const staff = await res.json();
    setStaff(staff)
}

export async function requestForEvents(setEvents) {
    const res = await get(`/event`);
    const events = await res.json();
    setEvents(events)
}

export async function requestForRegistrationEnd(setTime) {
    const registrationEnd = new Date(2022, 1, 21).getTime()
    setTime(registrationEnd)
}

export async function requestForPerson(id, setPerson) {
    const res = await get(`/person/${id}`);
    const person = await res.json();
    setPerson(person)
}
