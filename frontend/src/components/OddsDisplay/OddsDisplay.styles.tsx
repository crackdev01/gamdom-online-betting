import styled from 'styled-components';

export const OddsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    gap: 1px;
    width: 100%;
`;

export const OddsItem = styled.div`
    position: relative;
    background-color: #28a745;
    color: white;
    padding: 10px;
    flex: 1;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }
    
    &.selected {
        background-color: #33EA6A;
        color: #1B1E25
    }
`;