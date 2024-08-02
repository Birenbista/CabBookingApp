import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import * as database from '../Database'
import styles from './styles'
export default function CabList({ navigation }) {
    const [cabs, setCabs] = useState([])

    useEffect(() => {
        ;(async () => {
            const data = await database.loadCabList()
            // console.log(data)
            setCabs(data)
        })()
    }, [])

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('CabDetails', {
                    cabId: item.id,
                    companyName: item.CompanyName,
                    cabModel: item.Model,
                    cabImage: item.imageURL,
                })
            }
        >
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.imageURL }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.companyName}>{item.CompanyName}</Text>
                    <Text style={styles.model}>{item.Model}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cabs}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    )
}
