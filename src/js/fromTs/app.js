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
let menuEvent = document.getElementById("menu");
let iconEvent = document.getElementById("menuIcon");
menuEvent.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("menu clicked");
}));
iconEvent.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("menuIcon clicked");
}));
let checked = document.getElementById("checked-Id");
let TURN_ESP_ON;
TURN_ESP_ON = 0;
//checked.hidden = true;  //input.hidden default is false
checked.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    //if(checked.nodeName == "INPUT") console.log("OFF,  checked.ontoggle: ",  !checked.ontoggle)
    //if (typeof checked.ontoggle)
    if (checked != null) {
        //console.log("checked.hidden: ", checked.hidden)
        //console.log("checked.nodeName: ", checked.nodeName)
        console.log("ON");
        TURN_ESP_ON = 1;
        checked = null;
    }
    else { //default
        console.log("OFF");
        TURN_ESP_ON = 0;
        checked = document.getElementById("checked-Id");
    }
    if (TURN_ESP_ON > 0) {
        /*console.log("ESP: Auto Mode activating.")
        //await deleteImg()
        //await delay(3000)
        console.log("ESP: Auto Mode activating..")
        await captureImg()
        //await delay(3000)
        console.log("ESP: Auto Mode activating...")*/
        yield fetchCapturedPixFromEsp();
        //await delay(3000)
        console.log("ESP: Auto Mode activated!");
        TURN_ESP_ON = 0;
    }
    else
        console.log("TURN_ESP_ON: is OFF");
}));
