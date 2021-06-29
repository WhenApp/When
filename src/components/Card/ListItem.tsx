import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import tw, { styled } from 'twin.macro';
import './styles/transitions.css';

export const ListItemContainer: React.FC = ({ children }) => (
  <TransitionGroup component="ul" tw="flex-grow space-y-3">
    {children as React.ReactElement}
  </TransitionGroup>
);

interface TransitionProps {
  key: string;
}

export const ListItemTransition: React.FC<TransitionProps> = ({
  children,
  key,
}) => (
  <CSSTransition key={key} timeout={500} classNames="listItem">
    {children}
  </CSSTransition>
);

export const ListItemCard = styled.li(() => [
  tw`flex items-center flex-1 h-full px-6 py-4 overflow-hidden bg-white rounded-md shadow`,
]);
