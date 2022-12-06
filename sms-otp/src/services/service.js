let baseUrl = "/api";

let options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
};

async function getUsers(){

  try {
    let url = baseUrl + "/users";

    const response = await fetch(url, { ...options});

    const result = await response.json();

    return result.data;

  }catch (e){
    console.log(e);
  }
};

async function getUserById(phone){

  try {
    let url = baseUrl + "/users/"+ phone;

    const response = await fetch(url, { ...options});

    const result = await response.json();

    return result.data;

  }catch (e){
    console.log(e);
  }
}

async function sendSms(payload){

  try {
    let url = baseUrl + "/sms";

    options = {
      ...options,
      method: "POST",
      body: JSON.stringify(payload)
    }
    const response = await fetch(url, { ...options});

    const result = await response.json();

    return result.data;

  }catch (e){
    console.log(e);
  }
}

async function getMessages(){

  try {
    let url = baseUrl + "/sms/messages";

    const response = await fetch(url, { ...options});

    const result = await response.json();

    return result.data;

  }catch (e){
    console.log(e);
  }
};


export {
  getUsers,
  getUserById,
  sendSms,
  getMessages
}