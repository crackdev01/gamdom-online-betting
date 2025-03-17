import React from 'react';
import { EventListItem } from '../EventListItem/EventListItem';
import { EventListStyles } from './EventList.styles';
import { Event } from 'types';

interface EventListProps {
    events?: Event[];
}

export const EventListComponent: React.FC<EventListProps> = ({ events }) => {

    return <EventListStyles>
        {events?.map((event) => (
            <EventListItem key={event.id} event={event} />
        ))}
    </EventListStyles>;
};