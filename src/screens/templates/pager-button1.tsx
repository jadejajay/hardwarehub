import React, { useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ButtonProps {
  buttons: string[];
  onClick: (index: number) => void;
}

export function PagerButton1() {
  const [active, setActive] = useState<number>(1);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>{active}</Text>
      <Button
        buttons={['button 1', 'button 2', 'button 3']}
        onClick={handleClick}
      />
    </View>
  );
}

function Button({ buttons, onClick }: ButtonProps) {
  const [btnContainerWidth, setWidth] = useState<number>(0);
  const btnWidth = btnContainerWidth / buttons.length;
  const translateX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const translateXOpposit = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const onPress = (index: number) => {
    onClick(index + 1);
    Animated.spring(translateX, {
      toValue: index * btnWidth,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };

  return (
    <View
      style={styles.btnContainer}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
    >
      {buttons.map((btn, index) => (
        <TouchableOpacity
          key={btn}
          style={styles.btn}
          onPress={() => onPress(index)}
        >
          <Text>{btn}</Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.animatedBtnContainer,
          { width: btnWidth, transform: [{ translateX }] },
        ]}
      >
        {buttons.map((btn) => (
          <Animated.View
            key={btn}
            style={[
              styles.animatedBtn,
              {
                width: btnWidth,
                transform: [{ translateX: translateXOpposit }],
              },
            ]}
          >
            <Text style={styles.btnTextActive}>{btn}</Text>
          </Animated.View>
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  btnContainer: {
    height: 40,
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: '#00000011',
    width: '100%',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedBtnContainer: {
    height: 40,
    flexDirection: 'row',
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: '#444',
  },
  animatedBtn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
