import styled from 'styled-components';

export const DashboardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  position: sticky;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center; 
  box-shadow: 7px 10px 8px #1b1e25;
  background-color: #0a0b1a;
  width: 100%;
`;

export const H1 = styled.h1`
  margin: 0;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  overflow-y: auto;
`;