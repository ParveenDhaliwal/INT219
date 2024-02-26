const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
    //add event    
form.addEventListener("submit", (event)=>{
    event.preventDefault();//stop by default submission of form by clicking on submit
    Validate();
})
const validate=()=>{
    // trim the white spaces before and after
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const phoneval = phone.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    //validate username
    if(usernameval==""){
        setErrormsg(username,"username cannot be blank");
    }
    else if(usernameval.length<=2){
        setErrormsg(username,"username min 3 characters are required");
    }
    else{
        setSuccessMsg(username);
    }
    const isEmail = (emailval) =>{
            var atSymbol = emailval.indexOf("@");
            if(atSymbol<1) return false;
            var dot = emailval.lastindexOf('.');
            if(dot <= atSymbol+3)return false;
            if(dot == emailval.length - 1) return false;
            return true;
    }
    //validate email
    if(emailval==""){
        setErrormsg(email,"email cannot be blank");
    }
    else if(!isEmail(emailval)){
        setErrormsg(emailval,"email is not valid");
    }
    else{
        setSuccessMsg(email);
    }
    function setErrorMsg()
}