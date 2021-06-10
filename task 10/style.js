var shprompt=()=>{
    var a=prompt('Enter the Account Number');
    document.getElementById('acn').value=a;
}
var b,c,d,e;
var shprompt1=()=>{
    b=prompt('Enter the Credit Limit');
    document.getElementById('cl').value=b;
}
var shprompt2=()=>{
    c=prompt('Enter the Beginning Balance');
    document.getElementById('bb').value=c;
}
var shprompt3=()=>{
    d=prompt('Enter the Total Expenditure');
    document.getElementById('te').value=d;
}
var shprompt4=()=>{
    e=prompt('Enter the Total Credit Payments');
    document.getElementById('tcp').value=e;
}
var submit = () => {
    var f=Number(c)+Number(d)-Number(e);
    if(Math.max(b,f)===b){
        document.getElementById('nb').value=f;
    }
    else{
        alert('Credit Limit Exceeded!!');
    }
}