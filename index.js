const send=document.getElementById("send");
const fname=document.getElementById("fname");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const message=document.getElementById("message");
const validate=document.getElementById("validate");


//var mailformat ='[a-z0-9]{3,}+@[a-z0-9]{5,}'

send.addEventListener('click', check_validate);

function check_validate(){

    if (fname.value.length== "" ||fname.value.length<5) 
    {
        validate.innerHTML=`please enter a full name with 5 character minimum`
    }

    else if (message.value.length== "" || message.value.length>=100){
        validate.innerHTML=`Please enter message of maximum 100 character`
    }

    else if (phone.value.length== "" || phone.value.length<11 || phone.value.substring(0,3)=='+961'){
        validate.innerHTML=`Please enter a phone number starting with +961 follow with 8 digit`
    }

    else{
        validate.innerHTML=`Your message has been submit.Thank you :)`
    }
}