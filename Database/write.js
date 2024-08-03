import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from './config'

export async function save(data) {
    try {
        const dbCollection = collection(db, 'BookingDetails')
        const docRef = await addDoc(dbCollection, data)
        return docRef.id
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}

export async function cancelBooking(id) {
    try {
        const docRef = doc(db, 'BookingDetails', id)
        await deleteDoc(docRef)
        return true
    } catch (e) {
        return false
    }
}
