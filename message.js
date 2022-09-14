const view_messages=document.getElementById("view_messages");

window.onload=(loaded) =>{
    
   fetch('http://localhost/protfolio/contact_info.php')
    .then(response => response.json())
    .then(data =>{
        for(let i=0;i<data.length;i++){

            view_messages.innerHTML+=`<li>Name:${data[i].name}, Email:${data[i].email}, Phone:${data[i].phone}, Message:${data[i].message}</li>` 
        }
        
    } );

}