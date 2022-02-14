import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {Card, CardContent, CardHeader} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import ClickablePoster from "./ClickablePoster";

function EventComponent({speaker, title, poster}) {
    return (
        <ClickablePoster poster={poster}>
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
        </ClickablePoster>
    )
}

export function TimelineContainer({items}) {
    return (
        <Timeline lineColor={'#ddd'}>
            {items.map(item=>(
                <TimelineItem dateText={item.timeText} dateInnerStyle={{ backgroundColor: "#6aa058" }}>
                    <EventComponent speaker={item.speaker} title={item.title} poster={item.poster} />
                </TimelineItem>
            ))}
        </Timeline>
    )
}