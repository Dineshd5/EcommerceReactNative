import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const HomeIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.77 9 8.653-7 8.654 7v11c0 .53-.203 1.04-.563 1.414-.361.375-.85.586-1.36.586H5.692c-.51 0-.999-.21-1.36-.586A2.041 2.041 0 0 1 3.77 20V9Z"
    />
    <Path
      {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.538 22V12h5.77v10"
    />
  </Svg>
);
export default HomeIcon;
