import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EventListItem } from './EventListItem';
import { Event } from '../../types';
import { useGlobalStore, useSportEventsStore } from '../../stores'; 

jest.mock('../../stores', () => ({
    useGlobalStore: jest.fn(),
    useSportEventsStore: jest.fn(),
}));

describe('EventListItem Component', () => {
    const mockSetIsNotificationVisible = jest.fn();
    const mockEvent: Event = {
        id: 1,
        name: 'Test Event',
        description: 'This is a test event',
        odds: 2.5,
    };

    beforeEach(() => {
        (useGlobalStore as unknown as jest.Mock).mockReturnValue({
            setIsNotificationVisible: mockSetIsNotificationVisible,
        });
        (useSportEventsStore as unknown as jest.Mock).mockReturnValue({
            events: [mockEvent],
        });
        jest.clearAllMocks();
    });

    it('should render event information correctly', () => {
        render(<EventListItem event={mockEvent} />);
        expect(screen.getByText('Test Event')).toBeInTheDocument();
        expect(screen.getByText('This is a test event')).toBeInTheDocument();
    });

    it('should open and close the BetModal when "Place Bet" is clicked', async () => {
        render(<EventListItem event={mockEvent} />);
        const placeBetButton = screen.getByText('Place Bet');

        // Open modal
        await userEvent.click(placeBetButton);
        expect(screen.getByText('Place Your Bet')).toBeInTheDocument();

        // Close modal
        const cancelButton = screen.getByText('Cancel');
        await userEvent.click(cancelButton);
        expect(screen.queryByText('Place Your Bet')).not.toBeInTheDocument();
    });

    it('should show notification when a bet is placed', async () => {
        render(<EventListItem event={mockEvent} />);
        const placeBetButton = screen.getByText('Place Bet');

        // Open modal and place bet
        await userEvent.click(placeBetButton);
        const placeBetModalButton = screen.getAllByText('Place Bet');
        await userEvent.click(placeBetModalButton[1]);

        // Check notification visibility
        expect(mockSetIsNotificationVisible).toHaveBeenCalledWith(true);
    });
});