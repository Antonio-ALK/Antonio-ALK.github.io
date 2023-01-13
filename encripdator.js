

let menEncripted = [];

function encriptar(){
    let mensaje1 = document.getElementById("mensaje").value;
    let mensaje = mensaje1.toLowerCase();

    for(let i of mensaje){
      if(i === 'a'){menEncripted.push('ai')}else
      if(i === 'e'){menEncripted.push('enter')}else
      if(i === 'i'){menEncripted.push('imes')}else
      if(i === 'o'){menEncripted.push('ober')}else
      if(i === 'u'){menEncripted.push('ufat')}else{menEncripted.push(i)};  
        
    }
    console.log(menEncripted);
    let menEncripted2 = menEncripted.join('');
    console.log(menEncripted2);

    
    document.getElementById("mostrar").value = menEncripted2 ;
   menEncripted2 = '';
    
     
    
}
let a = /ai/g;
let e = /enter/g;
let i = /imes/g;
let o = /ober/g;
let u = /ufat/g;

function desEncriptar(){
  let mensaje = document.getElementById('mensaje').value;
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

    
