import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export function SwiperPager1() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const buttons = ['btn 1', 'btn 2'];

  const onClick = (index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: index * width });
    }
  };

  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View style={styles.container}>
      <View style={{ padding: 5, paddingTop: 0 }}>
        <ButtonContainer
          buttons={buttons}
          onClick={onClick}
          scrollX={scrollX}
        />
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {buttons.map((_, index) => (
          <View style={[styles.card]} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

interface ButtonContainerProps {
  buttons: string[];
  onClick: (index: number) => void;
  scrollX: Animated.Value;
}

function ButtonContainer({ buttons, onClick, scrollX }: ButtonContainerProps) {
  const [btnContainerWidth, setWidth] = useState(0);
  const btnWidth = btnContainerWidth / buttons.length;
  const translateX = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [0, btnWidth],
  });
  const translateXOpposit = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [0, -btnWidth],
  });

  return (
    <View
      style={styles.btnContainer}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
    >
      {buttons.map((btn, i) => (
        <TouchableOpacity
          key={btn}
          style={styles.btn}
          onPress={() => onClick(i)}
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
    paddingVertical: 5,
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
  card: {
    width: width - 10,
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});
