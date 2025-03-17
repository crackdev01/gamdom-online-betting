import styled from 'styled-components';

export const EventListItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  border: 1px solid #000;
  background-color: #010410;
  box-shadow: 11px 15px 8px rgb(15 1 1 / 10%);
  border-radius: 10px;
`;

export const EventInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const BetButton = styled.button`
  background-color: #187233;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  width: 100px;
`;
