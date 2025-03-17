import React from 'react';
import { NotificationContainer } from './Notification.styles';

interface NotificationProps {
    visible: boolean;
    message: string;
}

export const Notification: React.FC<NotificationProps> = ({ visible, message }) => {
    return <NotificationContainer visible={visible}>{message}</NotificationContainer>;
};
