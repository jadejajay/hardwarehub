import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const types = [
  'bounceOut',
  'bounceOutDown',
  'bounceOutUp',
  'bounceOutLeft',
  'bounceOutRight',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'lightSpeedOut',
  'slideOutDown',
  'slideOutUp',
  'slideOutLeft',
  'slideOutRight',
  'zoomOut',
  'zoomOutDown',
  'zoomOutUp',
  'zoomOutLeft',
  'zoomOutRight',
];

type AnimationType = (typeof types)[number];

export default function AnimatableExit() {
  const [animation, setAnimation] = useState<{
    visible: boolean;
    type: AnimationType;
  }>({
    visible: false,
    type: '',
  });

  const animate = (type: AnimationType) => {
    setAnimation({ visible: false, type });
    setTimeout(() => {
      setAnimation({ visible: true, type });
    }, 250);
  };

  const prop = animation.visible ? { animation: animation.type } : {};

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.view} {...prop}>
        <Text style={styles.type}>{animation.type}</Text>
      </Animatable.View>
      <ScrollView>
        {types.map((type) => (
          <View key={type}>
            <Button title={'animate - ' + type} onPress={() => animate(type)} />
            <View style={{ height: 5 }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  view: {
    height: 80,
    margin: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  type: {
    color: '#fff',
    fontSize: 17,
  },
});
