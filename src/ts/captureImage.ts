
//Fetches image from esp and saves as an img.src in the index.html
async function captureImg() {
  //delete any photo in ESp and take a new one

  let response = await fetch('http://192.168.2.124/capture');
  if (response.status === 200) {
    //refresh/reload the page and the call getCapturedPixFromEsp()
      alert("Capture Success!")
  }
  else alert("Capture Failed!")
}

/*Creates an img tag based on if the id is savedImg or imgFromEsp*/
async function createBtn(btnName: string, id: string){
  let newBtn = document.createElement("button")
  newBtn.id = id;
  newBtn.innerHTML = btnName;
  document.body.append(newBtn)
}

createBtn("CapturePixFromESP", "captureBtn").then(r => console.log("capture btn created"))

/*Creates an img tag based on if the id is savedImg or imgFromEsp*/
  let capBtn = document.getElementById("captureBtn")!
  capBtn.addEventListener("click", async () => {
    await captureImg()
      .then(r => alert('capture completed'));
  })

/*let data = await response.blob();
    // handle data:  convert img to string using Base64, then save to localstorage and set as src. TODO: save to path,
    let reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onloadend = function() {
      let base64data = reader.result; //returns file as encoded string
      let newImgUrlFromBase64data =   String(base64data)//dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      localStorage.setItem("captureImg", newImgUrlFromBase64data);//String.replace(/^data:image\/(png|jpg);base64,/, "rcvd")
    }
    //get img from localstorage and save to dir and pass the path as src
    let newImgSrc = localStorage.getItem("captureImg")!
    if(newImgSrc !== null && newImgSrc !== "data:"){
      let newImage = (document.getElementById('capturedImg') as HTMLImageElement);
      newImage. style. width = '400px';
      newImage.style. height = 'auto';
      newImage.style.margin = '20px';
      newImage.src = newImgSrc;
    }*/
