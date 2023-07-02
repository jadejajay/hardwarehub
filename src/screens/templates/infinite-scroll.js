/* eslint-disable react/no-unstable-nested-components */
import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class InfiniteScroll extends Component {
  state = {
    data: [],
    loading: false,
  };
  componentDidMount() {
    this.addData();
  }
  addData = () => {
    this.setState({ loading: true });
    const { data } = this.state;
    let extraData = [];
    for (let i = 0; i < 10; i += 1) {
      extraData.push({ id: data.length + i + 1 });
    }
    // get your more data from api
    this.setState({ data: [...data, ...extraData], loading: false });
  };
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.txt}>{item.id}</Text>
    </View>
  );

  render() {
    const { data, loading } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={(x) => x.id}
        renderItem={this.renderItem}
        onEndReached={this.addData}
        contentContainerStyle={styles.container}
        ListFooterComponent={() => (
          <View style={styles.loader}>
            {loading && <ActivityIndicator color="#000" />}
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  item: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    backgroundColor: '#871351',
  },
  txt: {
    color: '#fff',
    fontSize: 20,
  },
  loader: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
