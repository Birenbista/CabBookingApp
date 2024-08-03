import { View, Text, Image, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as database from '../Database'
import styles from './styles'

const CabDeatils = ({ route, navigation }) => {
    const { cabId, companyName, cabModel, cabImage } = route.params
    const [cabDetails, setCabDetails] = useState('')
    const [myCabs, setMyCabs] = useState([])

    useEffect(() => {
        ;(async () => {
            const data = await database.loadCabDetails(cabId)
            setCabDetails(data[0])
            const bookedCabs = await database.loadMyCabDetails()
            setMyCabs(bookedCabs)
        })()
    }, [])

    const handleBookCab = async () => {
        try {
            const isCabAlreadyBooked = myCabs.some(
                cab => cab.cabID === cabDetails.id
            )
            if (isCabAlreadyBooked) {
                Alert.alert('Sorry', 'You have already booked this cab.')
                return
            }

            if (myCabs.length >= 2) {
                Alert.alert('Sorry', 'You can only book a maximum of two cabs.')
                return
            }

            const data = {
                CompanyName: companyName,
                Model: cabModel,
                imageURL: cabImage,
                Cost: cabDetails.Cost,
                PassengersAllowed: cabDetails.PassengersAllowed,
                Rating: cabDetails.Rating,
                cabID: cabDetails.id,
            }
            await database.save(data)
            Alert.alert('Success', 'Cab booked successfully!')
            navigation.navigate('MyCab', { refresh: true })
        } catch (error) {
            console.error('Error booking cab:', error)
            Alert.alert(
                'Error',
                'There was an issue booking the cab. Please try again.'
            )
        }
    }
    // console.log('Cab Details', cabDetails)
    return (
        <View style={[styles.cabDeatilsContainer, { alignItems: 'center' }]}>
            <Image source={{ uri: cabImage }} style={styles.image} />
            <Text style={styles.title}>{companyName}</Text>
            <Text style={styles.subtitle}>{cabModel}</Text>
            <Text style={styles.detail}>Cost: ${cabDetails.Cost}/hour</Text>
            <Text style={styles.detail}>
                Passengers Allowed: {cabDetails.PassengersAllowed}
            </Text>
            <Text style={styles.detail}>Rating: {cabDetails.Rating}/10</Text>
            <Pressable style={styles.button} onPress={handleBookCab}>
                <Text style={styles.buttonText}>Book Cab</Text>
            </Pressable>
        </View>
    )
}

export default CabDeatils
