
const form = document.getElementById('form');
const nama = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.com$/;
    return re.test(String(email).toLowerCase());
}

const isValidMessage = message => {
    const ree = /^\W*(\w+\b\W*){3}$/;
    return ree.test(String(message).toLowerCase());
}

const validateInputs = () => {
    const namaval = nama.value.trim();
    const emailval = email.value.trim();
    const messageval = message.value.trim();

    if(namaval === ''){
        setError(nama, 'Masukkan nama');
    }else if(namaval.length<3){
        
        setError(nama, 'Minimal 3 karakter');
    }
    else{
        setSuccess(nama);
    }

    if(emailval === ''){
        setError(email, 'Masukkan email');
    }else if(!isValidEmail(emailval)){
        setError(email, 'Gunakan @ dan .com');
    }else{
        setSuccess(email);
    }


    if(messageval === ''){
        setError(message, 'Masukkan message');
    }else if(!isValidMessage(messageval)){
        setError(message, "Minimal 3 kata")
    }
    else{
        setSuccess(message);
    }
};