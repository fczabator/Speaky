import React from 'react';
import { BounceLoader } from 'react-spinners';
import { defaultProps } from 'grommet';

interface Props {
  color?: string;
  size?: number;
}

export const Loader: React.FC<Props> = ({ color, size }) => {
  console.log(defaultProps);
  return <BounceLoader color={color} size={size} />;
};

Loader.defaultProps = {
  color: defaultProps.theme.global.colors.brand.light,
  size: 90
};
