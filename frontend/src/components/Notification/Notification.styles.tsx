import styled from 'styled-components';

export const NotificationContainer = styled.div<{ visible: boolean }>`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 4px 9px 10px rgb(12 40 3 / 30%);
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.3s;
    z-index: 1000;
`;
