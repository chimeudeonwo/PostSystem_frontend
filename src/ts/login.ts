import * as http from 'http'
//post method to login

let lgn = document.getElementById("login")!

//(<HTMLInputElement>document.getElementById("username_id")).value;  //
let username =document.getElementById("username_id") as HTMLInputElement
let psw = document.getElementById("psw_id") as HTMLInputElement

//Add event
lgn.addEventListener("click", async () => {
  await login(username.value, psw.value);
})


/*login(email, psw)
      .then(r => console.log("returned promise: "));*/

export async function login(userName: string, password: string) {
  console.log("entered Login")
  console.log("username: ", userName, ", psw: ", password)

  let myUrl = "http://localhost:8080/basic"
  //let content = "User Login details"
  let response
  try{
      response = await fetch(myUrl, {
        method: 'get',
        headers: new Headers({
          'Authorization': 'Basic ' + btoa(userName + ":" + password),
          'Content-Type': 'application/json'
        }),
      })

     /*response = await fetch('http://localhost:8080/basic', {
      method: 'GET',
      credentials: 'include', //To cause browsers to send a request with credentials included, even for a cross-origin call, add credentials: 'include'
      //mode: 'no-cors',
      headers: {
        'Authorization': 'Basic ' + btoa(email +  password),
        'Content-Type': 'application/json; charset=UTF-8'   //'application/x-www-form-urlencoded; charset=UTF-8',   //'Content-Type':  'application/json',

        //origin: "origin",
        //'Access-Control-Allow-Credentials': '*',
        //host: 'http://localhost:8080/',
      }
    });*/
  } catch(error){
    console.warn(error)
  }

  let up = 'Basic ' + btoa(username.value +  psw.value)
  console.log("after - username: ", up)

  if(response){
    if (response.status === 200) {
      console.log("login successful")
      let resp = await response.json()
      if (resp){
        console.log("response from Server: ", resp)
      }
      else {
        console.log("No response body from Server, response.json(): ", resp)
        console.log("No response body from Server, response.body: ", response.body)
      }
    }
    else
      console.log("login failed!")
  }

  if(response === null){
    console.log("Response is null!")
  }


}

