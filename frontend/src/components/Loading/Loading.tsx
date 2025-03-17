import React from "react";
import { LoadingContainer, Spinner } from "./Loading.styles";

export const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};