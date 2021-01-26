"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Fetches image from esp and saves as an img.src in the index.html
function fetchCapturedPixFromEsp() {
    return __awaiter(this, void 0, void 0, function* () {
        //let prom =await fetch('http://192.168.2.124/capture')
        let response = yield fetch('http://192.168.2.124/saved-photo');
        if (response.status === 200) {
            let data = yield response.blob();
            // handle data:  convert img to string using Base64, then save to localstorage and set as src. TODO: save to path,
            let reader = new FileReader();
            yield reader.readAsDataURL(data);
            let newImgUrlFromBase64data;
            reader.onloadend = function () {
                return __awaiter(this, void 0, void 0, function* () {
                    let base64data = reader.result; //returns file as encoded string
                    newImgUrlFromBase64data = String(base64data); //dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
                    yield createImageTag("imgFromEsp", newImgUrlFromBase64data);
                    console.log("imageTag created to display image from ESP");
                });
            };
        }
        /*  //Check if the picture is already in localstorage and get it otherwise get from ESP alert("capture returned no image")
          let newImgSrcFromStore = localStorage.getItem("imgRcvdi")!
          if(newImgSrcFromStore !== null && newImgSrcFromStore !== "data:"){
            await createImageTag("savedImg", newImgSrcFromStore)
            console.log("image is from Local Storage")
            return;
          }
      
          let reader = new FileReader();
          await reader.readAsDataURL(data);
      
          reader.onloadend = async function() {
            let base64data = reader.result; //returns file as encoded string
            let newImgUrlFromBase64data =   String(base64data)//dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
            localStorage.setItem("imgRcvd", newImgUrlFromBase64data);//String.replace(/^data:image\/(png|jpg);base64,/, "rcvd")
         } */
        /*if (response.status === 200) {
          await createImageTag("imgId", "src/img/fetched/icon.jpg")
        }*/
        /*  //get img from localstorage and save to dir and pass the path as src
        let newImgSrc = localStorage.getItem("imgRcvd")!
        if(newImgSrc === null || newImgSrc == "data:"){
          console.log("No saved pix in ESP")
        }
        else {
          await createImageTag("imgFromEsp", newImgSrc)
          console.log("imageTag created to display image from ESP")}
      }*/
    });
}
/*
fetchPixFromEsp().then(r => {
  console.log('fetched')
}); */
/*Creates an img tag based on if the id is savedImg or imgFromEsp*/ // create the tag first and fetch the src later
function createImageTag(id, src) {
    return __awaiter(this, void 0, void 0, function* () {
        let imgTag = document.createElement("img");
        imgTag.id = id;
        imgTag.style.width = '400px';
        imgTag.style.height = 'auto';
        imgTag.style.margin = '20px';
        imgTag.src = src;
        document.body.append(imgTag);
    });
}
/*Creates an img tag based on if the id is savedImg or imgFromEsp*/
function createButton(btnName, id) {
    return __awaiter(this, void 0, void 0, function* () {
        let newBtn = document.createElement("button");
        newBtn.id = id;
        newBtn.innerHTML = btnName;
        document.body.append(newBtn);
    });
}
createButton("GetCapturedPixFromESP", "capturedImg").then(r => console.log("getPicture btn created"));
let nBtn = document.getElementById("capturedImg");
nBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetchCapturedPixFromEsp()
        .then(r => console.log("captured"));
}));
//location.reload();
//alert('reloaded')
/* async function getBase64Image(img: any) {
   let canvas = document.createElement("canvas");
   canvas.width = img.width;
   canvas.height = img.height;

   let ctx = canvas.getContext("2d")!;
   ctx.drawImage(img, 0, 0);

   let dataURL = canvas.toDataURL("src/img/img/");

   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
 }

let bannerImage = document.getElementById('bannerImg');
let imgData = getBase64Image(bannerImage);
localStorage.setItem("imgData", String(imgData));


let dataImage = localStorage.getItem('imgData');
let bannerImg = (document.getElementById('tableBanner') as HTMLImageElement)
bannerImg.src = "data:image/png;base64," + dataImage;
*/
/*
  async function getJpg(){
    let response = await fetch('src/img/pix.jpg')
    .then(response => response.blob())
      .then(images => {
        // Then create a local URL for that image and print it //save it here src/img/fetched
        let outside = URL.createObjectURL(images)
        console.log("out: ", outside)
      })
    let elem = (document.getElementById('imgId') as HTMLImageElement);
    elem.src = "src/img/fetched/icon.jpg"
    console.log("src from getJpg set")
  }

  getJpg().then(r => {
    console.log('image arrived')
  });

*/
