import { collection, getDocs } from 'firebase/firestore'
import { db } from './config'

/**
 * Loads all documensts from tasks collection
 * @returns
 * Array of the tasks
 */

export async function loadCabList() {
    const data = []
    const querySnapshot = await getDocs(collection(db, 'CabList'))
    querySnapshot.forEach(doc => {
        data.push({
            ...doc.data(),
            id: doc.id,
        })
    })
    return data
}

export async function loadCabDetails(cabId) {
    // const loadCategory = category.toLowerCase()
    const data = []
    const querySnapshot = await getDocs(
        collection(db, `CabList/${cabId}/CabDetails`)
    )
    querySnapshot.forEach(doc => {
        data.push({
            ...doc.data(),
            id: doc.id,
        })
    })
    // console.log(data)
    return data
}
