import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineOppositeContent,
} from "@mui/lab";

export const MuiTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="secondary">
          09:30am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector color="success" />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="secondary">
          10:00am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="warning" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color={"secondary.light"}>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="secondary">
          10:30am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
