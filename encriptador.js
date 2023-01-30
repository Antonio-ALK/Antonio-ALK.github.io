
let menEncrypted = [];


function encrypt(){
let mensaje = document.querySelector('.texto').value;
console.log(mensaje);
for(let i of mensaje){
    if(i === 'a'){menEncrypted.push('ano')}else
    if(i === 'e'){menEncrypted.push('enter')}else
    if(i === 'i'){menEncrypted.push('imen')}else
    if(i === 'o'){menEncrypted.push('orto')}else
    if(i === 'u'){menEncrypted.push('untao')}else{ menEncrypted.push(i)};
}
console.log(menEncrypted);
mostrarMen = menEncrypted.join('');

document.getElementById('mostrar').value = mostrarMen;
menEncrypted = [];
}

let a = /ano/g;
let e = /enter/g;
let i = /imen/g;
let o = /orto/g;
let u = /untao/g;

function desEncrypt(){
let mensaje = document.querySelector('.texto').value;
  let menDesencripted = mensaje.replaceAll(a, 'a');
  let menDesencripted1 = menDesencripted.replaceAll(e, 'e');
  let menDesencripted2 = menDesencripted1.replaceAll(i, 'i');
  let menDesencripted3 = menDesencripted2.replaceAll(o, 'o');
  let menDesencripted4 = menDesencripted3.replaceAll(u, 'u');

   

  
console.log(menDesencripted4)
 

  document.getElementById("mostrar").value = menDesencripted4;
}

function copy(){
  let copiar = document.getElementById('mostrar');
  copiar.select();
document.execCommand('copy');

}
