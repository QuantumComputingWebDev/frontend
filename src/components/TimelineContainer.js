import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export function TimelineContainer({items}) {
    return (
        <div style={{
            // backgroundImage: "url("+background+")",
            backgroundColor: "rgba(0,0,0,.7)"
        }}>
            <Timeline lineColor={'#ddd'}>
                {
                    items.map((item,index) => (
                        <TimelineItem
                            key = {index.toString()}
                            dateText = {item.dateText}
                        >
                            <h3 style ={{ color:"#ffffff" }}>
                                {item.title}
                            </h3>
                            <p style ={{ color:"#ffffff" }}>
                                {item.body}
                            </p>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    )
}