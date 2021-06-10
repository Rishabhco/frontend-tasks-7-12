var pattern=new RegExp(/^\d$/);
var add = () => {
    var inp1 = document.getElementById("n1").value;
    var inp2 = document.getElementById("n2").value;
    var test1=pattern.test(inp1);
    var test2=pattern.test(inp2);
    if(test1==true && test2==true){
        var result =  Number(inp1)+Number(inp2);
        document.getElementById("res").value = result;
    }
    else{
        alert('Enter the positive number!!')
    }
}

var sub = () => {
    var inp1 = document.getElementById("n1").value;
    var inp2 = document.getElementById("n2").value;
    var test1=pattern.test(inp1);
    var test2=pattern.test(inp2);
    if(test1==true && test2==true){
    var result =  Number(inp1)-Number(inp2);
    document.getElementById("res").value = result;}
    else{
        alert('Enter the positive number!!')
    }
}

var sq1 = () => {
    var inp1 = document.getElementById("n1").value;
    var result =  Math.pow(Number(inp1),2);
    document.getElementById("res").value = result;
}

var sq2 = () => {
    var inp2 = document.getElementById("n2").value;
    var result =  Math.pow(Number(inp2),2);
    document.getElementById("res").value = result;
}
var min = () => {
    var inp1 = document.getElementById("n1").value;
    var inp2 = document.getElementById("n2").value;
    inp1 = Number(inp1);
    inp2 = Number(inp2);
    var result=Math.min(inp1,inp2);
    document.getElementById("res").value = result;
}
var max = () => {
    var inp1 = document.getElementById("n1").value;
    var inp2 = document.getElementById("n2").value;
    inp1 = Number(inp1);
    inp2 = Number(inp2);
    var result=Math.max(inp1,inp2);
    document.getElementById("res").value = result;
}
var qu = () => {
    var inp1 = document.getElementById("n1").value;
    var inp2 = document.getElementById("n2").value;
    var test1=pattern.test(inp1);
    var test2=pattern.test(inp2);
    if(test1==true && test2==true){
    inp1 = Number(inp1);
    inp2 = Number(inp2);
    var result = Math.floor(inp1/inp2);
    document.getElementById("res").value = result;}
    else{
        alert('Enter the positive number!!')
    }
}
var re = () => {
    var inp1 = document.getElementById("n1").value;
    var inp2 = document.getElementById("n2").value;
    var test1=pattern.test(inp1);
    var test2=pattern.test(inp2);
    if(test1==true && test2==true){
    inp1 = Number(inp1);
    inp2 = Number(inp2);
    var result = inp1%inp2;
    document.getElementById("res").value = result;}
    else{
        alert('Enter the positive number!!')
    }
}