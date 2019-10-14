import React from 'react';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { Flex, Text } from 'rebass';
import { Icon } from './Icon';

export const Timer = () => {
  const [timer, setTimer] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => setTimer(timer + 1), 1000);
    return () => clearInterval(interval);
  });
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor(timer / 60);
  const seconds = `${timer % 60}`.padStart(2, '0');
  return (
    <Flex alignItems="center">
      <Icon color="#fff" icon={faHourglassHalf} size="3x" />
      <Text ml={15} color="#fff" fontSize={2} fontFamily="kalam">
        {`${hours ? `${hours}:` : ''}${minutes}:${seconds}`}
      </Text>
    </Flex>
  );
};
