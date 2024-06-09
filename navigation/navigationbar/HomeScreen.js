import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function HomeScreen({ navigation }) {
    const [markers, setMarkers] = useState([]);



    useEffect(() => {
        async function fetchMarkers() {
            const db = getFirestore();
            const markersCollection = collection(db, 'SnacksVending');
            const markersSnapshot = await getDocs(markersCollection);
            const markersData = markersSnapshot.docs.map(doc => doc.data());
            setMarkers(markersData);
        }

        fetchMarkers();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 52.5200,
                    longitude: 13.4050,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: marker.location.latitude, longitude: marker.location.longitude }}
                        title={marker.name} // Annahme: Ihre Automaten-Dokumente haben ein Feld "name"
                        description={marker.description} // Annahme: Ihre Automaten-Dokumente haben ein Feld "description"
                    /> 
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
