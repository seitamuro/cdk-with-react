import React from 'react';

type Props = {
  children: React.ReactNode;
}

export const Button = ({ children }: Props) => {
  return <button>{children}</button>;
}