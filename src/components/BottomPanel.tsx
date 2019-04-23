import * as React from 'react';
import styled from 'styled-components';
import {Flex, Card} from 'rebass';
import {Timer} from './Timer';
import {NextQuestionButton} from './NextQuestionButton';

const StickedPanel = styled(Card)`
  position: fixed;
  bottom: 10px;
`;

export const BottomPanel = () => (
  <StickedPanel variant="primary" width={0.9} p={10}>
    <Flex justifyContent="space-around">
      <Timer />
      <NextQuestionButton />
    </Flex>
  </StickedPanel>
);
