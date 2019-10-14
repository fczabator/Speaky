import React from 'react';
import styled from 'styled-components';
import { Flex, Card } from 'rebass';
import { Timer } from './Timer';
import { NextQuestionButton } from './NextQuestionButton';

type Props = {
  onNextTopic: () => void;
};

const StickedPanel = styled(Card)`
  position: fixed;
  bottom: 10px;
`;

export const BottomPanel: React.FC<Props> = ({ onNextTopic }) => (
  <StickedPanel variant="primary" width={0.9} p={10}>
    <Flex justifyContent="space-around">
      <Timer />
      <NextQuestionButton onClick={onNextTopic} />
    </Flex>
  </StickedPanel>
);
