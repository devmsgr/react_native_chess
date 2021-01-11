import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../utils/Colors';
const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button_bg} onPress={onPress}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button_bg: {
    flex: 1,
    height: 40,
    margin: 5,
    backgroundColor: Colors.fc_blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: 'white', fontSize: 18},
});
