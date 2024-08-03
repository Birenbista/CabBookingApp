import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BookedCab from '../Components/BookedCab'

const BookingStack = createNativeStackNavigator()

const commonHeaderOptions = {
    headerStyle: {
        backgroundColor: '#38419D',
    },
    headerTintColor: '#fff',
}
export default function MyCab() {
    return (
        <BookingStack.Navigator>
            <BookingStack.Screen
                name="BookedCab"
                options={{ ...commonHeaderOptions, title: 'My Cab' }}
                component={BookedCab}
            ></BookingStack.Screen>
        </BookingStack.Navigator>
    )
}
