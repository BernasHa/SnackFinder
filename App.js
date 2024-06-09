// App.js
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './app/MainContainer';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [initializing, setInitializing] = useState(true);

  // useEffect(() => {
  //   const auth = getAuth();
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     setUser(user);
  //     if (initializing) setInitializing(false);
  //   });

  //   return unsubscribe;
  // }, [initializing]);

  // if (initializing) return null;

  return (
      <View style={styles.container}>
        <MainContainer />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
