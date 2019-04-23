import * as React from 'react';
import styled from 'styled-components';
import {Flex} from 'rebass';
import {Timer} from './Timer';
import {NextQuestionButton} from './NextQuestionButton';

const StickedPanel = styled(Flex)`
  position: fixed;
  bottom: 0;
`;

export const BottomPanel = () => (
  <StickedPanel pb={20} justifyContent="space-around" width={1}>
    <Timer />
    <NextQuestionButton />
  </StickedPanel>
);
