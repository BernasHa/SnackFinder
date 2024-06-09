// MainContainer.js
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './FirebaseConfig';
import LoginScreen from './app/screens/LoginScreen';
import DashboardScreen from './app/screens/DashboardScreen'; // Ändern Sie diesen Import entsprechend

const Stack = createNativeStackNavigator();

export default function MainContainer() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return unsubscribe; // Unsubscribe on unmount
  }, [initializing]);

  if (initializing) return null; // or a loading spinner

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
