import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const vartical_lable = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <View style={styles.container}>
      {number.map((item) => {
        return (
          <View key={item} style={styles.item_bg}>
            <Text style={styles.text}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default vartical_lable;

const styles = StyleSheet.create({
  container: {
    width: 18,
    backgroundColor: 'black',
    flexDirection: 'column-reverse',
  },
  item_bg: {
    flex: 1,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: 'white'},
});
