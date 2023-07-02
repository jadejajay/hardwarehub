import React, { useRef, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const types = [
  'bounce',
  'flash',
  'jello',
  'pulse',
  'rotate',
  'rubberBand',
  'shake',
  'swing',
  'tada',
  'wobble',
];

export function AnimateInput() {
  const ref = useRef<Animatable.View>(null);
  const [animation, setAnimation] = useState('');

  const animate = (type: string) => {
    setAnimation(type);
    ref.current?.[type]();
  };

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.view} ref={ref}>
        <Text style={styles.type}>{animation}</Text>
      </Animatable.View>
      <ScrollView>
        {types.map((type) => (
          <View key={type}>
            <Button title={type} onPress={() => animate(type)} />
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
    height: 100,
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
