import React from 'react';
import { OddsContainer, OddsItem } from './OddsDisplay.styles';

interface OddsDisplayProps {
    odds: number;
}

export const OddsDisplay: React.FC<OddsDisplayProps> = ({ odds }) => {
    return (
        <OddsContainer>
            <OddsItem>
                {odds}
            </OddsItem>
        </OddsContainer>
    );
};