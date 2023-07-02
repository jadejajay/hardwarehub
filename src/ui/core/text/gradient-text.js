/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

import { Text } from '@/ui';

export const GradientText = ({
  h = 50,
  w = 100,
  t = 'hello world',
  s = 18,
}) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {/* <Svg width={w} height={h}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#cb5eee" />
            <Stop offset="100%" stopColor="#4BE1EC" />
          </LinearGradient>
        </Defs>
        <SvgText
          x="50%"
          y="50%"
          fontSize={s}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#grad)"
        > */}

      <Text
        className="text-start"
        style={{
          fontFamily: 'Ruluko',
          fontSize: 20,
          fontWeight: '400',
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        {t}
      </Text>

      {/* </SvgText>
      </Svg> */}
    </View>
  );
};
