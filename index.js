
function Num(val){
    document.getElementById("result").value += val;
}

function equal(){
    const input = document.getElementById("result").value;
    const output = eval(input);
    document.getElementById("result").value = output;
}

function clr(){
    document.getElementById("result").value = ""
}


// function del(){
//     const inputValue = document.getElementById("result").value;
//     result = inputValue.splice(-1,1)
//     document.getElementById("result").value = inputValue[-1]
// }

function del(){
    const inputValue = document.getElementById("result").value;
    result = inputValue.slice(0,-1)
    document.getElementById("result").value = result;
}