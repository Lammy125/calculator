
let out_Top = document.querySelector('#outTop');
let out_Bottom = document.querySelector('#outBottom');

function erase(){
    out_Top.innerHTML = "";
    out_Bottom.innerHTML = "";
}

function clickMe(sum) { 
    out_Top.innerHTML += sum;
}

function calculate() { 
    let context = out_Top.innerHTML;
    let calculation = eval(context);
    out_Bottom.innerHTML = calculation;
}
