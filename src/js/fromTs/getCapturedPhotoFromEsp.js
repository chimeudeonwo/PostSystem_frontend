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
            reader.onloadend = function () {
                return __awaiter(this, void 0, void 0, function* () {
                    let base64data = reader.result; //returns file as encoded string
                    let newImgUrlFromBase64data = String(base64data); //dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
                    let srcItem = localStorage.getItem("srcUrl");
                    if (!srcItem) {
                        localStorage.setItem("srcUrl", newImgUrlFromBase64data);
                    }
                    else
                        localStorage.setItem("srcUrl2", newImgUrlFromBase64data);
                    //await createImageTag("imgFromEsp", newImgUrlFromBase64data)
                });
            };
            let istImg = document.getElementById("istImg_id");
            if (localStorage.getItem("srcUrl") && localStorage.getItem("srcUrl2")) {
                istImg.src = localStorage.getItem("srcUrl2");
            }
            else
                istImg.src = localStorage.getItem("srcUrl");
            istImg.style.width = "100%";
            istImg.style.height = "100%";
            //istImg.src =  <string>localStorage.getItem("srcUrl")
            console.log("imageTag created to display image from ESP");
            istImg.style.transform = "rotate(" + 90 + "deg)";
            /*istImg.style.width = "100%"
            istImg.style.height = "100%"
            istImg.style.objectFit = "contain"
            istImg.style.transform = "rotate(" + 90 + "deg)"
            if(localStorage.getItem("srcUrl") && localStorage.getItem("srcUrl2"))
              istImg.src =  <string>localStorage.getItem("srcUrl2")
            else istImg.src =  <string>localStorage.getItem("srcUrl")*/
        }
    });
}
function fetchCapturedPixFromLocalStorage(img, id) {
    img.style.objectFit = "contain";
    img.style.width = "84%";
    img.style.height = "auto";
    img.src = localStorage.getItem(id);
    console.log("src from Localstorage is set");
}
let nBtn = document.getElementById("getImgEsp");
nBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetchCapturedPixFromEsp()
        .then(r => console.log("image from dsp is gotten"));
}));
let storeBtn = document.getElementById("getImgStore");
let imgToBeUpdated = document.getElementById("2ndImg_id");
let imgId = "srcUrl";
storeBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    if (!(imgToBeUpdated.src == localStorage.getItem(imgId))) {
        console.log("2ndImg_id no such Id exists in the doc");
        fetchCapturedPixFromLocalStorage(imgToBeUpdated, imgId);
    }
    else {
        imgId = "srcUrl2";
        imgToBeUpdated = document.getElementById("3rdImg_id");
        fetchCapturedPixFromLocalStorage(imgToBeUpdated, imgId);
        console.log("3rdImg_id no such Id exists in the doc");
    }
}));
let newHeight;
let newWidth;
function resizeImg(img, maxWidth, maxHeight) {
    if (img.width > img.height) {
        newHeight = img.height * (maxWidth / img.width);
        newWidth = maxWidth;
    }
    else {
        newWidth = img.width * (maxHeight / img.height);
        newHeight = maxHeight;
    }
    return img;
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
