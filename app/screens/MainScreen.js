import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { auth } from '../../FirebaseConfig'; // korrigiere den Pfad hier
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';