// todo should be based on Material UI with Analog-specific enhancements https://graphable-ai.atlassian.net/browse/XSL-215
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
  // Analog implementation of a Material UI button
  return <button>{children}</button>;
};
