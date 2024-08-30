let countValue = document.getElementById("counter");
let incrementButton = document.getElementById("increase");
let decrementButton = document.getElementById("decrease");

// function increment() {
//     countValue.innerText = parseInt(countValue.innerText) + 1;
// }

// function decrement() {
//     countValue.innerText = parseInt(countValue.innerText) - 1;
// }

function increment(){
    // get the vlue from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};


function decrement(){
        // get the vlue from UI
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;
};

// let value = 0;
// incrementButton.addEventListener("click", function () {
//     value = value + 1;
//     countValue.innerText = value;
// });

// decrementButton.addEventListener("click", function () {
//     value = value - 1;
//     countValue.innerText = value;
// });

