let a=[]
var push1 = () => {
    var inp = document.getElementById("n").value;
    if (inp === "")
    {
        document.getElementById("dis").textContent = "Please enter an element";
    }
    else{
        a.push(inp);
        document.getElementById("dis").textContent = "";
    }
}

var pop1 = () => {
    if (a.length === 0)
    {
        document.getElementById("dis").textContent = "Stack is empty";
    }
    else
    {
        a.pop();
        document.getElementById("dis").textContent = "";
    }
}

var traverse=()=>{
    document.getElementById("dis").textContent = a;
}