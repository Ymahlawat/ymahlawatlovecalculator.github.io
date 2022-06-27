
var button = document.getElementById('submit-btn');
var result = document.getElementById('result');

var fir = document.getElementById('first');
var sec = document.getElementById('second');


button.addEventListener("click", function(){

first.value = first.value.toLowerCase();
second.value = second.value.toLowerCase();

    if(fir.value==""||sec.value==""){
        result.innerHTML = "Please add valid name";
        return;
    }
    let a = Math.random();
    a = a*100;
    a=Math.round(a);
    result.innerHTML = "Your Love is "+a+" % strong";
});

