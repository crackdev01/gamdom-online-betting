import React from 'react';
import { ErrorContainer } from './InternalServerError.styles';

export const InternalServerError: React.FC = () => {
    return (
      <ErrorContainer>
        <h1>500</h1>
        <p>Internal Server Error</p>
        <a href="/">Go back to Home</a>
      </ErrorContainer>
    );
  };
  