const textarea = document.getElementById('textarea')
const submit = document.getElementById('submit')
const counter = document.getElementById('counter')
const colorChange = document.getElementById("colorChange")

// function textLength(){
//     if(textarea.value.length >= 20){
//         alert('too much words')
//     }


// }

function onChange(){
        // counter
        let count = textarea.value.length
        counter.innerText = count

        if(textarea.value.length >= 250 && counter.innerText >= 250){
            colorChange.style.color = "red"
            counter.style.color = "red"
        }
}





submit.addEventListener("click", textLength)