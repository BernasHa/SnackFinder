import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { auth } from '../../FirebaseConfig'; // korrigiere den Pfad hier
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';

const LoginScreen = (navigation) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LogIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Sign In failed! Email or Password incorrect.");
    }
  };

  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Check your Emails!");
    } catch (error) {
      console.log(error);
      alert("Account on this Email is already existing.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity onPress={LogIn} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
