import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {Card, CardContent, CardHeader} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";

export function TimelineContainer({items}) {
    return (
        <Timeline lineColor={'#ddd'}>
            {items.map(item=>(
                <TimelineItem dateText={item.timeText} dateInnerStyle={{ backgroundColor: "#6aa058" }}>
                    <Card sx={{ backgroundColor: "#4b5e8d"}} elevation={10}>
                        <CardHeader
                            avatar={(
                                <Avatar
                                    alt={item.speaker.name}
                                    src={item.speaker.src}
                                    sx={{width: 60, height: 60}}
                                />
                            )}
                            title={<Typography variant="h4">{item.speaker.name}</Typography>}
                        />
                        <CardContent>
                            <Typography variant="h5">{item.title}</Typography>
                        </CardContent>
                    </Card>
                </TimelineItem>
            ))}
        </Timeline>
    )
}