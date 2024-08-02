import { collection, addDoc } from 'firebase/firestore'
import { db } from './config'

export async function save(data) {
    console.log(data)
    try {
        const dbCollection = collection(db, 'BookingDetails')
        const docRef = await addDoc(dbCollection, data)
        return docRef.id
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}
