const increaseBtn = document.getElementById("increaseButton")
const resetBtn = document.getElementById("resetButton")
const decreaseBtn = document.getElementById("decreaseButton")
const image = document.getElementById("image")
let accumulator = 500




function increaseWidth(){
     console.log("increase")
    let width = accumulator + "px"
     console.log(accumulator)
     if (width == "700px"){
        accumulator = 700
     }
     else {
        accumulator += 10
        image.style.width = width;
     }


}


function decreaseWidth(){
    console.log("decrease")
    // console.log(width)
    let width = accumulator + "px"
    if (width == "300px"){
        accumulator = 300
       
    }
    else{
        accumulator -= 10
        image.style.width = width; 
    }
}


function resetWidth(){
    console.log("reset")
    accumulator = 500
    let width = accumulator + "px"
    image.style.width = width;

}


increaseBtn.addEventListener("click", increaseWidth)
resetBtn.addEventListener("click", resetWidth)
decreaseBtn.addEventListener("click", decreaseWidth)
