
// Fetches image from esp and saves as an img.src in the index.html
async function fetchCapturedPixFromEsp() {
   //let prom =await fetch('http://192.168.2.124/capture')

   let response = await fetch('http://localhost:8080/api/automate/auto') //('http://192.168.2.124/saved-photo')
   if (response.status === 200) {
     let data = await response.blob();
     // handle data:  convert img to string using Base64, then save to localstorage and set as src. TODO: save to path,
     let reader = new FileReader();
     await reader.readAsDataURL(data);

     reader.onloadend = async function () {
       let base64data = reader.result; //returns file as encoded string
       let newImgUrlFromBase64data = String(base64data)//dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
       let srcItem = localStorage.getItem("srcUrl")
       if(!srcItem){
         localStorage.setItem("srcUrl", newImgUrlFromBase64data)
       }
       else localStorage.setItem("srcUrl2", newImgUrlFromBase64data)
       //await createImageTag("imgFromEsp", newImgUrlFromBase64data)
     }
     let istImg = document.getElementById("istImg_id") as HTMLImageElement
     if(localStorage.getItem("srcUrl") && localStorage.getItem("srcUrl2")){
       istImg.src =  <string>localStorage.getItem("srcUrl2")
     }
     else istImg.src =  <string>localStorage.getItem("srcUrl")

     istImg.style.width = "100%"
     istImg.style.height = "100%"
     //istImg.src =  <string>localStorage.getItem("srcUrl")
     console.log("imageTag created to display image from ESP")
     istImg.style.transform = "rotate(" + 90 + "deg)";

     /*istImg.style.width = "100%"
     istImg.style.height = "100%"
     istImg.style.objectFit = "contain"
     istImg.style.transform = "rotate(" + 90 + "deg)"
     if(localStorage.getItem("srcUrl") && localStorage.getItem("srcUrl2"))
       istImg.src =  <string>localStorage.getItem("srcUrl2")
     else istImg.src =  <string>localStorage.getItem("srcUrl")*/
   }

 }

function fetchCapturedPixFromLocalStorage(img: HTMLImageElement, id: string) {
    img.style.objectFit = "contain"
    img.style.width = "84%"
    img.style.height = "auto"
    img.src =  <string>localStorage.getItem(id)
    console.log("src from Localstorage is set")
}


let nBtn = document.getElementById("getImgEsp")!
nBtn.addEventListener("click", async () => {
  await fetchCapturedPixFromEsp()
    .then(r => console.log("image from dsp is gotten"));
})

let storeBtn = document.getElementById("getImgStore")!
let imgToBeUpdated = document.getElementById("2ndImg_id") as HTMLImageElement
let imgId = "srcUrl"
storeBtn.addEventListener("click", async () => {
   if(!(imgToBeUpdated.src == localStorage.getItem(imgId))){
     console.log("2ndImg_id no such Id exists in the doc")
     fetchCapturedPixFromLocalStorage(imgToBeUpdated, imgId)
   }
   else{
     imgId = "srcUrl2"
     imgToBeUpdated = document.getElementById("3rdImg_id") as HTMLImageElement
     fetchCapturedPixFromLocalStorage(imgToBeUpdated, imgId)
     console.log("3rdImg_id no such Id exists in the doc")
   }
})

let newHeight
let newWidth
function resizeImg(img: HTMLImageElement, maxWidth: number, maxHeight: number){
  if (img.width > img.height) {
    newHeight = img.height * (maxWidth / img.width);
    newWidth = maxWidth;
  } else {
    newWidth = img.width * (maxHeight / img.height);
    newHeight = maxHeight;
  }
  return img;
}

/*Creates an img tag based on if the id is savedImg or imgFromEsp // create the tag first and fetch the src later
 async function createImageTag(id: string, src: string){
  let imgTag = document.createElement("img")
  imgTag.id = id;
  imgTag. style. width = '33%x';
  imgTag.style. height = '330px';
  imgTag.src = src;
  document.body.append(imgTag);
  return imgTag
}*/

/*Creates an img tag based on if the id is savedImg or imgFromEsp
 function createButton(btnName: string, id: string){
  let newBtn = document.createElement("button")
  newBtn.id = id;
  newBtn.innerHTML = btnName;
  //document.body.append(newBtn)
   return newBtn
}*/



