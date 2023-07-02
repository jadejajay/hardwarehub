import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Colors } from 'react-native-ui-lib';

export const ProductsDetails = ({ style }) => {
  return (
    <View style={style}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Product Details</Text>
      </View>
      <Card elevation={28} style={styles.content}>
        <View style={styles.item}>
          <Text style={styles.key}>Category :</Text>
          <Text style={styles.key}>Size :</Text>
          <Text style={styles.key}>Variants :</Text>
          <Text style={styles.key}>Finishing :</Text>
          <Text style={styles.key}>Quantity :</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.verticalLine} />
          <Text style={styles.value}>Rose Handle</Text>
          <Text style={styles.value}>100cm-2000cm</Text>
          <Text style={styles.value}>3</Text>
          <Text style={styles.value}>Chrome</Text>
          <Text style={styles.value}>100/pkg</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    padding: 10,
  },
  item: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  key: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
  verticalLine: {
    position: 'absolute',
    width: 1,
    height: '100%',
    backgroundColor: Colors.darkGrey,
    borderWidth: 0.5,
    marginHorizontal: -10,
  },
  value: {
    width: '100%',
    marginBottom: 3,
  },
});
