// import React from 'react';
import { Button } from 'rebass';

// type Props = {
//   children: React.ReactNode;
// };

// export const RoundButton: React.FC<Props> = ({children}) => (
//   <Button borderRadius={'100%'} variant="primary">
//     {children}
//   </Button>
// );
import styled from 'styled-components';

export const RoundButton = styled(Button)`
  height: ${props => props.width}px;
  border-radius: 100%;
`;
