import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Pressable,
    Image,
    Alert,
} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import * as database from '../Database'
import styles from './styles'
import { useFocusEffect } from '@react-navigation/native'

const BookedCab = ({ route, navigation }) => {
    const [myCabs, setMyCabs] = useState([])

    const fetchMyCabs = async () => {
        try {
            const data = await database.loadMyCabDetails()
            setMyCabs(data)
        } catch (error) {
            console.error('Error loading booked cab details:', error)
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchMyCabs()
        }, [route.params?.refresh])
    )

    const handleCancelBooking = async id => {
        Alert.alert(
            'Camcel Booking',
            'Are you sure ? This action will cancel your booking. ',
            [
                {
                    text: 'Confirm',
                    onPress: async () => {
                        try {
                            await database.cancelBooking(id)
                            setMyCabs(myCabs.filter(cab => cab.id !== id))
                            Alert.alert(
                                'Success',
                                'Your Booking has been Cancelled'
                            )
                        } catch (error) {
                            Alert.alert(
                                'Error',
                                'There was an error cancelling your booking. Please try again.'
                            )
                            console.error('Error cancelling booking:', error)
                        }
                    },
                },
                {
                    text: 'Cancel',
                },
            ]
        )
    }

    const renderItem = ({ item }) => (
        <View style={styles.mycabContainer}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.imageURL }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.companyName}>{item.CompanyName}</Text>
                    <Text style={styles.model}>{item.Model}</Text>
                    <Text style={styles.detail}>Cost: ${item.Cost}/hour</Text>
                    <Text style={styles.detail}>
                        Passengers Allowed: {item.PassengersAllowed}
                    </Text>
                    <Text style={styles.detail}>Rating: {item.Rating}/10</Text>
                </View>
            </View>
            <Pressable
                style={styles.button}
                onPress={() => handleCancelBooking(item.id)}
            >
                <Text style={styles.buttonText}>Cancel Booking</Text>
            </Pressable>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            {myCabs.length === 0 ? (
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>
                        "No booked cabs yet. Browse and book your ride!"
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={myCabs}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContent}
                />
            )}
        </SafeAreaView>
    )
}

export default BookedCab
