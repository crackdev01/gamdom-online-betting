import React, { useState } from "react";
import { EventListItemProps } from "./EventListItem.types";
import { BetButton, ButtonContainer, EventInfoContainer, EventListItemStyles } from "./EventListItem.styles";
import { BetModal } from "components/BetModal/BetModal";
import { useGlobalStore } from "stores";

export const EventListItem: React.FC<EventListItemProps> = ({ event }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setIsNotificationVisible } = useGlobalStore();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const onClose = () => {
        toggleModal();
    };

    const onPlaceBet = () => {
        toggleModal();
        setIsNotificationVisible(true);
        setTimeout(() => setIsNotificationVisible(false), 1500); // Hide after 3 seconds
    };

    return (
        <EventListItemStyles>
            <EventInfoContainer>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
            </EventInfoContainer>
            <ButtonContainer>
                <BetButton onClick={toggleModal}>Place Bet</BetButton>
            </ButtonContainer>
            <BetModal isOpen={isModalOpen} onPlaceBet={onPlaceBet} onClose={onClose} event={event} />
        </EventListItemStyles>
    );
};
