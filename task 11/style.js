var submit=()=>{
    if(document.getElementById('name').value===''){
        alert('Please enter your name !!');
    }
    if(document.getElementById('password').value===''){
        alert('Please enter your password !!');
    }
    if(document.getElementById('mail').value===''){
        alert('Please enter your email !!');
    }
    var x=document.getElementById('mail').value;  
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
    {	alert("Not a valid e-mail address");	
        return false;	
    }
        
}