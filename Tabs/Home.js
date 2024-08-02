import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CabDeatils from '../Components/CabDeatils'
import CabList from '../Components/CabList'

const CabStack = createNativeStackNavigator()
const commonHeaderOptions = {
    headerStyle: {
        backgroundColor: '#9381ff',
    },
    headerTintColor: '#fff',
}
export default function Home() {
    return (
        <CabStack.Navigator>
            <CabStack.Screen
                name="CabList"
                options={{ ...commonHeaderOptions, title: 'Cab List' }}
                component={CabList}
            />

            <CabStack.Screen
                name="CabDetails"
                component={CabDeatils}
                options={{ ...commonHeaderOptions, title: 'Cab Details' }}
            />
        </CabStack.Navigator>
    )
}
