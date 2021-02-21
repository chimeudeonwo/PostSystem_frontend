
let menuEvent = document.getElementById("menu")!
let iconEvent = document.getElementById("menuIcon")!

menuEvent.addEventListener("click", async () => {
  console.log("menu clicked")
})

iconEvent.addEventListener("click", async () => {
  console.log("menuIcon clicked")
})



let checked: any = document.getElementById("checked-Id")!
let TURN_ESP_ON: number
TURN_ESP_ON = 0

//checked.hidden = true;  //input.hidden default is false
checked.addEventListener("click", async () => {
 //if(checked.nodeName == "INPUT") console.log("OFF,  checked.ontoggle: ",  !checked.ontoggle)
  //if (typeof checked.ontoggle)
    if (checked != null) {
      //console.log("checked.hidden: ", checked.hidden)
      //console.log("checked.nodeName: ", checked.nodeName)
      console.log("ON")
      TURN_ESP_ON = 1
      checked = null
    }
    else { //default
      console.log("OFF")
      TURN_ESP_ON = 0
      checked = document.getElementById("checked-Id")!
    }


  if(TURN_ESP_ON > 0){
    /*console.log("ESP: Auto Mode activating.")
    //await deleteImg()
    //await delay(3000)
    console.log("ESP: Auto Mode activating..")
    await captureImg()
    //await delay(3000)
    console.log("ESP: Auto Mode activating...")*/
    await fetchCapturedPixFromEsp()
    //await delay(3000)
    console.log("ESP: Auto Mode activated!")
    TURN_ESP_ON = 0
  }
  else console.log("TURN_ESP_ON: is OFF")
})
