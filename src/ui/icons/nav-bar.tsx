import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import { G } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function NavBarIcon({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      transform="matrix(1, 0, 0, 1, 0, 0)rotate(90)"
    >
      <G id="SVGRepo_bgCarrier" stroke-width="0" />
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M12 3L12 21"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17 7L17 21"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7 10L7 21"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
