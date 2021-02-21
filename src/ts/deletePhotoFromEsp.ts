
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

 function deleteFromLocalStorage(img: HTMLImageElement, id: string) {
   let urlImg = <string>localStorage.getItem(id)
   if(urlImg){
     img.src = ""
     localStorage.removeItem(id)
     console.log("src from Localstorage is deleted")
   }
   else console.log("no such item is stored in Localstorage")
 }

let delFromEspBtn = document.getElementById("delEsp")!  //! means ignore the error, the button will exist
 delFromEspBtn.addEventListener("click", async () => {
   await deleteImg();
   console.log('ESP emptied')
 })

 let delFromStoreBtn = document.getElementById("delStore")!  //! means ignore the error, the button will exist
 let imgToBeDeleted = document.getElementById("istImg_id") as HTMLImageElement

 delFromStoreBtn.addEventListener("click", async () => {
   deleteFromLocalStorage(imgToBeDeleted, "srcUrl")
   deleteFromLocalStorage(imgToBeDeleted, "srcUrl2")
   console.log('Store emptied')
 })

 function delay(ms: number) {
   return new Promise( resolve => setTimeout(resolve, ms) );
 }

 /*
 let parentClass = document.getElementsByClassName("sideBarButtons")!
 for(let i = 0; i < parentClass.length; i++){
   if(parentClass){
     button.style.padding = "10px"
     button.style.float = "left"
     //button.style.width = "100%"
     button.style.fontSize = "20px"
     button.style.textAlign = "center"

     parentClass[i].appendChild(button)
     console.log("sideColumnMenu child: deleteBtn created")
   }
 }
*/
