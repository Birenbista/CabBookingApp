import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './Tabs/Home'

import MyCab from './Tabs/MyCab'

const Tab = createBottomTabNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (route.name === 'MyCab') {
                            iconName = focused ? 'car' : 'car-outline'
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },
                    headerShown: false,
                    tabBarActiveTintColor: '#3887BE',
                    tabBarInactiveTintColor: '#fff',
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#38419D',
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="MyCab" component={MyCab}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
