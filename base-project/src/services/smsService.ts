import fast2sms from 'fast-two-sms';
import { getFirestoreByAppName } from '../utils/firebase';

async function sendSms(data) {
  try {

    const app = await getFirestoreByAppName();
    const date = new Date().toISOString();

    console.log(data)

    await app.collection('messages').add({
      phone: data.phone,
      firstName: data.firstName,
      lastName: data.lastName,
      text: data.text,
      time: date
    })

    var options = {
      authorization: "CqyoY5Ei2uelwFfaGNKpbmVnTM4zDWBJ6tUgRsLcrk9QOjxvh3YKvn4FNpPS89UDZG36AjcwR1LMldeC",
      message: `${data.text}`, numbers: [`${data.phone}`]
    }
    // const response = await fast2sms.sendMessage(options)

    // if (!response) {
      // throw new Error('sms not sent');
    // }
    return options;

  } catch (e) {
    console.log(e);
    return {}
  }
}

async function getMessages() {
  const app = await getFirestoreByAppName();
  const messagesRef = await app.collection('messages').get();
  let messages = [];
  messagesRef.forEach(childDoc => messages.push(childDoc.data()))
  if (!messages.length) {
    throw new Error('No messages exists in firebase');
  }
  return messages;
}


export { sendSms, getMessages };
