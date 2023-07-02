import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const EditCompany = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.pricingOption}>
          <Text style={styles.pricingOptionTitle}>Basic</Text>
          <Text style={styles.pricingOptionPrice}>$10/month</Text>
          <Text style={styles.pricingOptionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <View style={styles.pricingOptionFeatures}>
            <Text style={styles.pricingOptionFeature}>1 user</Text>
            <Text style={styles.pricingOptionFeature}>10GB storage</Text>
            <Text style={styles.pricingOptionFeature}>Basic support</Text>
          </View>
          <View style={styles.pricingOptionButtonContainer}>
            <Text style={styles.pricingOptionButton}>Choose Plan</Text>
          </View>
        </View>
        <View style={styles.pricingOption}>
          <Text style={styles.pricingOptionTitle}>Pro</Text>
          <Text style={styles.pricingOptionPrice}>$25/month</Text>
          <Text style={styles.pricingOptionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <View style={styles.pricingOptionFeatures}>
            <Text style={styles.pricingOptionFeature}>5 users</Text>
            <Text style={styles.pricingOptionFeature}>100GB storage</Text>
            <Text style={styles.pricingOptionFeature}>Priority support</Text>
          </View>
          <View style={styles.pricingOptionButtonContainer}>
            <Text style={styles.pricingOptionButton}>Choose Plan</Text>
          </View>
        </View>
        <View style={styles.pricingOption}>
          <Text style={styles.pricingOptionTitle}>Enterprise</Text>
          <Text style={styles.pricingOptionPrice}>$50/month</Text>
          <Text style={styles.pricingOptionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <View style={styles.pricingOptionFeatures}>
            <Text style={styles.pricingOptionFeature}>Unlimited users</Text>
            <Text style={styles.pricingOptionFeature}>1000GB storage</Text>
            <Text style={styles.pricingOptionFeature}>24/7 support</Text>
          </View>
          <View style={styles.pricingOptionButtonContainer}>
            <Text style={styles.pricingOptionButton}>Choose Plan</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  pricingOption: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  pricingOptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pricingOptionPrice: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  pricingOptionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  pricingOptionFeatures: {
    marginBottom: 10,
  },
  pricingOptionFeature: {
    fontSize: 14,
    color: '#999',
  },
  pricingOptionButtonContainer: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
  },
  pricingOptionButton: {
    fontSize: 14,
    color: '#fff',
    padding: 10,
  },
});
