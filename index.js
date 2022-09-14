const send=document.getElementById("send");
const view=document.getElementById("view");
const fname=document.getElementById("fname");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const message=document.getElementById("message");
const validate=document.getElementById("validate");


send.addEventListener('click', check_validate);
view.addEventListener('click', display_messages);

function check_validate(){

    if (fname.value.length== "" ||fname.value.length<5) 
    {
        validate.innerHTML=`please enter a full name with 5 character minimum`
    }

    else if (message.value.length== "" || message.value.length>=100){
        validate.innerHTML=`Please enter message of maximum 100 character`
    }

    else if (phone.value.length== "" || phone.value.length<12  || phone.value.substring(0,4)!='+961'){
        validate.innerHTML=`Please enter a phone number starting with +961 follow with 8 digit`
    }

    else{

        fetch('http://localhost/protfolio/add_contact_info.php',{
            method:'POST',
            body:new URLSearchParams({"name":fname.value,"email":email.value,"phone":phone.value,"message":message.value}),
        }).then(result => result.json())
        .then(data => console.log(data))
        validate.innerHTML=`Your message has been submit.Thank you :)`
        fname.value = '';
        email.value = '';
        phone.value = '';
        message.value = '';
    }
}

function display_messages(){

    window.location.href="messages.html"
}



