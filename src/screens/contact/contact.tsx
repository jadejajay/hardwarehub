import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Image } from '@/ui';

export const Contact = () => {
  return (
    <View>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.bodfjkd.ghsrmkgjrkt.com/fehefef.jpg',
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Jane Doe</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>jane.doe@example.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Location:</Text>
        <Text style={styles.infoValue}>San Francisco, CA</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Bio:</Text>
        <Text style={styles.infoValue}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContainer: {
    margin: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    margin: 5,
  },
});
