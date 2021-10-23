const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

//add event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    Validate();
})

const sendData = (usernameVal1, sRate, count) => {
    if(sRate === count) {
        alert('login successfull');
        swal("Welcome! " + usernameVal1, "Your registration is successfull", "success");
        location.href = `store.html`
    }
}

//for final data validation
const successMsg = (usernameVal1) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal1, sRate, count);
        } else {
            return false;
        }
    }
}

//define the validate function
const Validate = () => {
    const usernameVal1 = username.value.trim();
    const passwordVal1 = password.value.trim();
    //validate username
    if (usernameVal1 === ""){
        setErrorMsg(username, 'username cannot be blank');
    } else if (usernameVal1.length <= 2){
        setErrorMsg(username, 'username min 3 character');
    } else {
        setSuccessMsg(username);
    }
    //validate password
    if (passwordVal1 === ""){
        setErrorMsg(password, 'password cannot be blank');
    } else if (passwordVal1.length <= 5){
        setErrorMsg(password, 'Minimun 6 char');
    } else {
        setSuccessMsg(password);
    }
    successMsg(usernameVal1);
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}