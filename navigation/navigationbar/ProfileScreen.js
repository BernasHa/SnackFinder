import React from 'react'
import { View, Text } from 'react-native'

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>ProfileScreen</Text>
        </View>
    );
};