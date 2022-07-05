const textTaxa = document.getElementById("textTaxa");
const textDolar = document.getElementById("textDolar");
const textReal = document.getElementById("textReal");
const divResult = document.getElementById("resultado");
const divResult2 = document.getElementById("resultado2");

document.getElementById("dbutton").disabled = true;
document.getElementById("rbutton").disabled = true;

function taxa() {
  if (isNaN(textTaxa.value) || textTaxa.value === "") {
    window.alert("Insira uma taxa válida.");
    textTaxa.innerHTML = "";
  } else {
    document.getElementById("insira").innerHTML = "";
    document.getElementById("tbutton").disabled = true;
    document.getElementById("dbutton").disabled = false;
    document.getElementById("rbutton").disabled = false;
  }
}

function converteDolar() {
  if (isNaN(textDolar.value) || textDolar.value === "") {
    window.alert("Insira um valor válido.");
  } else {
    let resultado = textDolar.value;
    resultado = resultado * textTaxa.value;
    divResult.innerHTML = "Resultado em dólares: " + "U$ " + resultado;
  }
}

function converterReal() {
  if (isNaN(textReal.value) || textReal.valeu === "") {
    window.alert("Insira um valor válido.");
  } else {
    let resultado = textReal.value;
    resultado = resultado / textTaxa.value;
    divResult2.innerHTML = "Resultado em reais: " + "R$ " + resultado;
  }
}
function limpar() {
  document.getElementById("tbutton").disabled = false;
  document.getElementById("dbutton").disabled = true;
  document.getElementById("rbutton").disabled = true;
  textTaxa.value = "";
  textDolar.value = "";
  textReal.value = "";
  divResult.innerHTML = "";
  divResult2.innerHTML = "";
  document.getElementbyId("insira").innerHTML = "Insira uma taxa";
}
