import React from 'react';
import { NotFoundContainer } from './NotFound.styles';

export const NotFound: React.FC = () => {
    return (
        <NotFoundContainer>
            <h1>404</h1>
            <p>Page Not Found</p>
            <a href="/">Go back to Home</a>
        </NotFoundContainer>
    );
};