let psw = document.getElementById('psw');
let pswC = document.getElementById('confirmPsw');

// We avoid that the confirmation input turns green if clicked 
// and filled before the password one.
window.addEventListener('load', () => pswC.setAttribute('pattern', ''));

//We demand equality between the psw and the pswC values.
psw.addEventListener('keyup', () => pswC.setAttribute('pattern', psw.value));