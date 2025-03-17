import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BetModal } from './BetModal';
import { Event } from '../../types';

describe('BetModal Component', () => {
    const mockOnPlaceBet = jest.fn();
    const mockOnClose = jest.fn();
    const mockEvent: Event = {
        id: 1,
        name: 'Test Event',
        odds: 2.5,
    };

    const renderComponent = (isOpen: boolean) => {
        return render(
            <BetModal
                isOpen={isOpen}
                onPlaceBet={mockOnPlaceBet}
                onClose={mockOnClose}
                event={mockEvent}
            />
        );
    };

    it('should render correctly when open', () => {
        const { getByText, getByPlaceholderText } = renderComponent(true);
        expect(getByText('Place Your Bet')).toBeInTheDocument();
        expect(getByPlaceholderText('Enter your bet')).toBeInTheDocument();
    });

    it('should not render when closed', () => {
        const { queryByText } = renderComponent(false);
        expect(queryByText('Place Your Bet')).not.toBeInTheDocument();
    });

    it('should call onPlaceBet and reset bet amount when "Place Bet" is clicked', async () => {
        const { getByText, getByPlaceholderText } = renderComponent(true);
        const input = getByPlaceholderText('Enter your bet');
        await userEvent.type(input, '100');
        await userEvent.click(getByText('Place Bet'));
        expect(mockOnPlaceBet).toHaveBeenCalled();
        expect(input).toHaveValue('0');
    });

    it('should call onClose and reset bet amount when "Cancel" is clicked', async () => {
        const { getByText, getByPlaceholderText } = renderComponent(true);
        const input = getByPlaceholderText('Enter your bet');
        await userEvent.type(input, '100');
        await userEvent.click(getByText('Cancel'));
        expect(mockOnClose).toHaveBeenCalled();
        expect(input).toHaveValue('0');
    });
});
