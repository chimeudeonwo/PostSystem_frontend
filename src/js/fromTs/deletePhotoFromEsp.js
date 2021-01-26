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
function deleteImg() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = {};
        let response = yield fetch('http://192.168.2.124/delete', {
            method: 'POST',
            //mode: 'cors', // no-cors, *cors, same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'text/plain',
            },
            //referrerPolicy: 'no-referrer',
            body: JSON.stringify(data),
        });
        if (response.status === 200) {
            yield delay(100);
            alert("Waited 100ms, All pictures have been successfully deleted from ESP32");
        }
        else
            alert("Unable to delete all pictures from ESP32");
        /* .then(response => response.json())
         .then(data => {
           console.log('Success:', data);
         })
         .catch((error) => {
           console.error('Error:', error);
         });*/
    });
}
const button = document.getElementById('btn'); //! means ignore the error, the button will exist
button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield deleteImg();
    console.log('All pictures are deleted');
}));
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
