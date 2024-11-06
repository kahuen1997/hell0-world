const emailinput = document.getElementById('mosemailinput')
const emailbutton = document.getElementById('mosemailbutton')
const emailwrongmsg = document.getElementById('emailmsg')

emailbutton.addEventListener("click", ()=>{
    if (emailinput.value===null||emailinput.value===""){
        emailwrongmsg.style.color = 'red'
        emailwrongmsg.innerHTML = "Please input email";
    } else if (!emailinput.checkValidity()){
        emailwrongmsg.style.color = 'red'
        emailwrongmsg.innerHTML = emailinput.validationMessage;
    } else{
        emailwrongmsg.innerHTML = "";
    }
})