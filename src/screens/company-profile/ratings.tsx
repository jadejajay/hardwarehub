import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

// Sample data for reviews
const reviews = [
  { id: '1', user: 'John', rating: 5, reviewText: 'Great app!' },
  { id: '2', user: 'Sarah', rating: 4, reviewText: 'Good features.' },
  { id: '3', user: 'Mike', rating: 3, reviewText: 'Needs improvement.' },
  // Add more reviews here...
];

const ReviewItem = ({ user, rating, reviewText }) => (
  <View style={styles.reviewItem}>
    <View style={styles.avatarContainer}>
      <Image
        source={{
          uri: 'http://itekindia.com/nimmi/assets/photos/wardrobe1.jpg',
        }} // Replace with your own avatar image
        style={styles.avatar}
      />
    </View>
    <View style={styles.reviewContent}>
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.rating}> {rating}/5</Text>
      <Text style={styles.reviewText}>{reviewText}</Text>
    </View>
  </View>
);

const ReviewsComponent = ({ style }) => (
  <View style={style}>
    <Text style={styles.title}>Reviews</Text>
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem
          user={item.user}
          rating={item.rating}
          reviewText={item.reviewText}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5', // Google's background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#4285F4', // Google's accent color
  },
  reviewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewContent: {
    flex: 1,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: '#707070', // Gray color
  },
  reviewText: {
    fontSize: 16,
  },
});

export default ReviewsComponent;
