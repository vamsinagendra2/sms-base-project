import { getFirestoreByAppName } from "../utils/firebase";

async function getUsersHelper() {
    const app = await getFirestoreByAppName();
    const usersRef = await app.collection('users').get();
    let users = [];
    usersRef.forEach(childDoc => users.push(childDoc.data()))
  if (!users.length) {
    throw new Error('No user exists in firebase');
  }
  return users;
}

async function getUserbyIdHelper(phone) {
    const app = await getFirestoreByAppName();
    const usersRef = await app.collection('users').where('phone', '==', phone).get();
    let users = [];
    usersRef.forEach(childDoc => users.push(childDoc.data()))
  if (!users.length) {
    throw new Error('No user exists in firebase');
  }
  return users[0] || {};
}

export { getUsersHelper, getUserbyIdHelper };