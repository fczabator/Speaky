import React from 'react';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './Icon';

type Props = {
  onClick: () => void;
};

export const NextQuestionButton: React.FC<Props> = ({ onClick }) => (
  <div onClick={onClick}>
    <Icon color="#fff" icon={faForward} size="3x" />
  </div>
);
