import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CartIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    />
  </Svg>
);
export default CartIcon;
