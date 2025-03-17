import React from "react";
import {
  DashboardContainer,
  DashboardStyles,
  H1,
  Header,
} from "./Dashboard.styles";

export const Dashboard: React.FC = () => {
  return (
    <DashboardStyles>
      <Header>
        <H1>Dashboard</H1>
      </Header>
      <DashboardContainer>
        EventList
      </DashboardContainer>
    </DashboardStyles>
  );
};
