var username = document.getElementById("username");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");

function validateform(){
   
    if(username.value.trim()==""){
        document.getElementById("userError").innerHTML="User name can`t be blank";
        return false;
    }
    else if(password.value.trim()==""){
        document.getElementById("passError").innerHTML="Password can`t be blank";
        return false;
    }
    else if(password.value.trim().length<5){
        document.getElementById("passError").innerHTML="Password too short";
        return false;
    }
    else{
        return true;
    }
}