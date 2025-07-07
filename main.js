let num = document.getElementById('cantidad');
let text = "información";
let contra = document.getElementById('contrasena')
const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789#$!.¡+-_*&/"
let boton = document.getElementById('generar')

console.log(typeof num);


function generar(){

let num_user = parseInt(num.value);
console.log(num_user);
    if( num_user <8){
        alert("La contraseña debería tener al menos 8 caracteres");
        }

let password = '';

    for(let i=0; i< num_user; i++){
        let random = abc[ Math.floor(Math.random() *abc.length)];
        console.log(random)

        password+=random;
    }
contra.value = password;
}









