let menEncrypted = [];

function encrypt() {
  let mensaje = document.querySelector(".texto").value.toLowerCase();

  for (let i of mensaje) {
    if (i === "a") {
      menEncrypted.push("ai");
    } else if (i === "e") {
      menEncrypted.push("enter");
    } else if (i === "i") {
      menEncrypted.push("imes");
    } else if (i === "o") {
      menEncrypted.push("ober");
    } else if (i === "u") {
      menEncrypted.push("ufat");
    } else {
      menEncrypted.push(i);
    }
  }

  mostrarMen = menEncrypted.join("");

  document.getElementById("mostrar").value = mostrarMen;
  menEncrypted = [];
}

let a = /ai/g;
let e = /enter/g;
let i = /imes/g;
let o = /ober/g;
let u = /ufat/g;

function desEncrypt() {
  let mensaje = document.querySelector(".texto").value;
  let menDesencripted = mensaje.replaceAll(a, "a");
  let menDesencripted1 = menDesencripted.replaceAll(e, "e");
  let menDesencripted2 = menDesencripted1.replaceAll(i, "i");
  let menDesencripted3 = menDesencripted2.replaceAll(o, "o");
  let menDesencripted4 = menDesencripted3.replaceAll(u, "u");

  document.getElementById("mostrar").value = menDesencripted4;
}

function copy() {
  let copiar = document.getElementById("mostrar");
  copiar.select();
  document.execCommand("copy");
}
