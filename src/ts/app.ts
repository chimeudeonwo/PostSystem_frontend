 /*

//Creates an img tag based on if the id is savedImg or imgFromEsp
 async function createImageTag(id: string, src: string){
   let imgTag = document.createElement("img")
   imgTag.id = id;
   imgTag. style. width = '400px';
   imgTag.style. height = 'auto';
   imgTag.style.margin = '20px';
   imgTag.src = src;
   document.body.append(imgTag)
 }


 // Fetches image from esp and saves as an img.src in the index.html
 async function fetchPixFromEsp() {
   //let prom =await fetch('http://192.168.2.124/capture')

   //Check if the picture is already in localstorage and get it otherwise get from saved
   let newImgSrcFromStore = localStorage.getItem("imgRcvdi")!
   if(newImgSrcFromStore){
     /*let imgFromlocalStore = (document.getElementById('savedImg') as HTMLImageElement);
     imgFromlocalStore. style. width = '400px';
     imgFromlocalStore.style. height = 'auto';
     imgFromlocalStore.style.margin = '20px';
     imgFromlocalStore.src = newImgSrcFromStore;*/
   /*  await createImageTag("savedImg", newImgSrcFromStore)
     console.log("image is from Local Storage")
     return;
   }

   let response = await fetch('http://192.168.2.124/saved-photo')
   if (response.status === 200) {
     let data = await response.blob();
     // handle data:  convert img to string using Base64, then save to localstorage and set as src. TODO: save to path,
     let reader = new FileReader();
     await reader.readAsDataURL(data);
     reader.onloadend = async function() {
       let base64data = reader.result; //returns file as encoded string
       let newImgUrlFromBase64data =   String(base64data)//dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
       localStorage.setItem("imgRcvd", newImgUrlFromBase64data);//String.replace(/^data:image\/(png|jpg);base64,/, "rcvd")
     }
     //get img from localstorage and save to dir and pass the path as src
     let newImgSrc = localStorage.getItem("imgRcvd")!
     /*let newImage = (document.getElementById('imgFromEsp') as HTMLImageElement);
     console.log("image is from ESP")
     newImage. style. width = '400px';
     newImage.style. height = 'auto';
     newImage.style.margin = '20px';
     newImage.src = newImgSrc;*/
    /* await createImageTag("imgFromEsp", newImgSrc)
   }

   if (response.status === 200) {
     //set the img as the image src of the img tag with the id imgId
     /*let elem = (document.getElementById('imgId') as HTMLImageElement);
     elem. style.width = '400px';
     elem.style.height = 'auto';
     elem.style.margin = '20px';
     elem.src = "src/img/fetched/icon.jpg"   //localStorage.getItem("imgRcvd")!*/
    /* await createImageTag("imgId", "src/img/fetched/icon.jpg")
   }
 }

 fetchPixFromEsp().then(r => {
   console.log('fetched')
 });

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



 /* //For reading multiple files
 *
 * function previewFiles() {

  var preview = document.querySelector('#preview');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }

}*/
