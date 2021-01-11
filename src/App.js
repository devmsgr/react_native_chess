import React, {useEffect, useState} from 'react';

// import all the components we are going to use
import {SafeAreaView, View, StyleSheet} from 'react-native';

import Chessboard from './screens/chessboard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Chessboard></Chessboard>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    height: 25,
    width: 25,
  },
});
