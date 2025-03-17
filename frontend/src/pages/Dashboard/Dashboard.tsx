import React, { useEffect } from "react";
import {
  DashboardContainer,
  DashboardStyles,
  H1,
  Header,
} from "./Dashboard.styles";
import { EventListComponent } from "components/EventList/EventList";
import { useGlobalStore } from "stores";
import { Notification } from "components/Notification/Notification";
import { useRequestSportsEvents } from "services";
import { useSportEventsStore } from "stores";
import { Loading } from "components/Loading/Loading";
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const { isNotificationVisible } = useGlobalStore();
  const { events, setEvents } = useSportEventsStore();
  const navigate = useNavigate();

  const { data: eventsData, isLoading, error } = useRequestSportsEvents();

  useEffect(() => {
    if (eventsData) {
      setEvents(eventsData);
    }
  }, [eventsData, setEvents]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    navigate('/error'); 
  }

  return (
    <DashboardStyles>
      <Header>
        <H1>Dashboard</H1>
      </Header>
      <DashboardContainer>
        <EventListComponent
          events={events}
        />
      </DashboardContainer>
      <Notification
        visible={isNotificationVisible}
        message="Bet placed successfully!"
      />
    </DashboardStyles>
  );
};
