import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Lable = ({lable}) => {
  return (
    <View style={styles.lable_bg}>
      <Text style={styles.text}>{lable}</Text>
    </View>
  );
};

export default Lable;

const styles = StyleSheet.create({
  lable_bg: {
    flex: 1,
    width: '100%',
    height: 40,
    marginBottom: 18,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  text: {color: 'white', fontSize: 10},
});
