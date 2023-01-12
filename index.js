
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

function remove(){
    document.getElementById("result").value.length-1
}

function del(){
    document.getElementById("result").value = '' //remove()
}