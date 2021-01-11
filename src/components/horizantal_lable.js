import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HorizantalLable = () => {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  return (
    <View style={styles.container}>
      {alphabet.map((item) => {
        return (
          <View key={item} style={styles.item_bg}>
            <Text style={styles.text}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default HorizantalLable;

const styles = StyleSheet.create({
  container: {
    height: 18,
    marginHorizontal: 18,
    flexDirection: 'row',
  },
  item_bg: {flex: 1, margin: 1, alignItems: 'center'},
  text: {color: 'white'},
});
