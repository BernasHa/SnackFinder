import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


const SettingsScreen = () => {
    const auth = FIREBASE_AUTH;
    const user = auth.currentUser;
    const navigation = useNavigation();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigation.navigate("Login")
        } catch (error) {
            console.error("Sign out error: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Email: {user?.email} </Text>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
};


export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    text: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
})
