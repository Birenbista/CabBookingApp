import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    listContent: {
        padding: 10,
    },
    cabDeatilsContainer: {
        margin: 8,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    mycabContainer: {
        marginBottom: 30,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    itemContainer: {
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    image: {
        width: 220,
        height: 150,
        borderRadius: 10,
        resizeMode: 'contain',
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1,
    },
    companyName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    model: {
        fontSize: 14,
        color: '#666',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    detail: {
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
        margin: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
})
