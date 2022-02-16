import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {Card, CardContent, CardHeader} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import ClickableImagePoster from "./ClickableImagePoster";
import ClickablePoster from "./ClickablePoster";
import EventInfo from "./EventInfo";
import Paper from "@mui/material/Paper";

function EventComponent({speaker, title, poster, description, briefDescription}) {
    const child = (
        <Card sx={{ backgroundColor: "#4b5e8d"}} elevation={10} className="event-card">
            <CardHeader
                avatar={(
                    <Avatar
                        alt={speaker.name}
                        src={speaker.src}
                        sx={{width: 60, height: 60}}
                    />
                )}
                title={<Typography variant="h4">{speaker.name}</Typography>}
            />
            <CardContent>
                <Typography variant="h5">{title}</Typography>
            </CardContent>
        </Card>
    )
    if(poster) {
        return (
            <ClickableImagePoster poster={poster}>
                {child}
            </ClickableImagePoster>
        )
    } else {
        return (
            <ClickablePoster
                inside={
                    <Paper sx={{
                        maxHeight: "90vh",
                        maxWidth: "90vw",
                        backgroundColor: "primary.dark",
                        p: 3,
                        overflowY: "auto"
                    }}>
                        <EventInfo title={title} speaker={speaker} description={description}
                                   briefDescription={description}/>
                    </Paper>
                }>
                {child}
            </ClickablePoster>
        )
    }
}

export function TimelineContainer({items}) {
    return (
        <Timeline lineColor={'#ddd'}>
            {items.map(item=>(
                <TimelineItem dateText={item.timeText} dateInnerStyle={{ backgroundColor: "#6aa058" }}>
                    <EventComponent {...item} />
                </TimelineItem>
            ))}
        </Timeline>
    )
}