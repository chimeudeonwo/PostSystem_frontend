
 async function deleteImg() {
  let data = {}

    let response = await fetch('http://192.168.2.124/delete', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'text/plain',
    },
    //referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  })
  if (response.status === 200) {
    await delay(100);
    alert("Waited 100ms, All pictures have been successfully deleted from ESP32")
  }
  else alert("Unable to delete all pictures from ESP32")
   /* .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });*/
}

const button = document.getElementById('btn')!  //! means ignore the error, the button will exist

button.addEventListener("click", async () => {
  await deleteImg();
  console.log('All pictures are deleted')
})

 function delay(ms: number) {
   return new Promise( resolve => setTimeout(resolve, ms) );
 }
