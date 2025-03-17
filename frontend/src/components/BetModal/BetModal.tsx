import React, { useState } from "react";
import { ButtonDiv, InputField, ModalContent, ModalOverlay } from "./BetModal.styles";
import { OddsDisplay } from "components/OddsDisplay/OddsDisplay";
import { Event } from "types";
interface BetModalProps {
    isOpen: boolean;
    onPlaceBet: () => void;
    onClose: () => void;
    event: Event;
}

export const BetModal: React.FC<BetModalProps> = ({ isOpen, onPlaceBet, onClose, event }) => {
    const [betAmount, setBetAmount] = useState(0);

    const closeEventHandler = (
        e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>
    ) => {
        e.stopPropagation();
        setBetAmount(0);
        onClose();
    };

    const placeBetEventHandler = (
        e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>
    ) => {
        e.stopPropagation();
        setBetAmount(0);
        onPlaceBet();
    };

    return (
        isOpen ?
            <ModalOverlay isOpen={isOpen}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                    <h2>Place Your Bet</h2>
                    <OddsDisplay
                        odds={event.odds}
                    />
                    <InputField
                        type="text"
                        placeholder="Enter your bet"
                        value={betAmount}
                        onChange={(e) => setBetAmount(Number(e.target.value))}
                    />
                    <ButtonDiv onClick={placeBetEventHandler}>Place Bet</ButtonDiv>
                    <ButtonDiv onClick={closeEventHandler}>Cancel</ButtonDiv>
                </ModalContent>
            </ModalOverlay> : <></>
    );
};
