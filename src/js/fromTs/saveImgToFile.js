"use strict";
/*FileStream fs = new FileStream("c:\\yourtpath\\filename.jpg",FileMode.OpenOrCreate, FileAccess.Write);
fs.Write(imgdata , 0,imgdata.Length);
fs.Close();*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
<input type='file' id='input' accept="image/*">
<img id='img'> */
function resizeImag(image, maxWidth, maxHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            image.src = "";
            image.onload = () => {
                console.log(" entered");
                let width = image.width;
                let height = image.height;
                if (width <= maxWidth && height <= maxHeight) {
                    console.log(" resolve(file);");
                    return;
                }
                console.log(" entered1");
                let newWidth;
                let newHeight;
                if (width > height) {
                    newHeight = height * (maxWidth / width);
                    newWidth = maxWidth;
                }
                else {
                    newWidth = width * (maxHeight / height);
                    newHeight = maxHeight;
                }
                console.log(" entered2");
                let canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;
                let context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, newWidth, newHeight);
            };
            image.onerror = reject;
        });
    });
}
/*
function resizeImage(file:File, maxWidth:number, maxHeight:number):Promise<Blob> {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
      let width = image.width;
      let height = image.height;

      if (width <= maxWidth && height <= maxHeight) {
        resolve(file);
      }

      let newWidth;
      let newHeight;

      if (width > height) {
        newHeight = height * (maxWidth / width);
        newWidth = maxWidth;
      } else {
        newWidth = width * (maxHeight / height);
        newHeight = maxHeight;
      }

      let canvas = document.createElement('canvas');
      canvas.width = newWidth;
      canvas.height = newHeight;

      let context = canvas.getContext('2d')!

      context.drawImage(image, 0, 0, newWidth, newHeight);

      canvas.toBlob(resolve, file.type);
    };
    image.onerror = reject;
  });
}

document.getElementById('input').addEventListener('change', (o) => {
  //If you don't need to resize the image, you can get the blob to upload from the
  //FileList (e.g. doUpload(o.target.files[0]);

  if(o.target.files.length > 0) {
    resizeImage(o.target.files[0], 200, 200).then(blob => {
      //You can upload the resized image: doUpload(blob)
      document.getElementById('img').src = URL.createObjectURL(blob);
    }, err => {
      console.error("Photo error", err);
    });
  }}); */
