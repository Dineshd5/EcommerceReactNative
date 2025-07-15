import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SearchIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
    {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
    />
  </Svg>
);
export default SearchIcon;
