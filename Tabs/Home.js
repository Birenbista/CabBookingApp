import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CabDeatils from '../Components/CabDeatils'
import CabList from '../Components/CabList'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

const CabStack = createNativeStackNavigator()
const commonHeaderOptions = {
    headerStyle: {
        backgroundColor: '#38419D',
    },
    headerTintColor: '#fff',
}
export default function Home() {
    const navigation = useNavigation()

    useFocusEffect(
        useCallback(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'CabList' }],
            })
        }, [navigation])
    )
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
