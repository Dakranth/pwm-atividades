countZerar = 0;
count = 0;
const inputtext = document.getElementById("inputtext");

function criar() {
  ++count;
  const createdDiv = document.createElement("div");
  createdDiv.innerText = inputtext.value;
  createdDiv.setAttribute("id", "div" + count);
  createdDiv.setAttribute("onclick", "contador(id)");
  document.body.appendChild(createdDiv);
  document.getElementById("div" + count).style.backgroundColor = corAleatoria();
  //
  const br = document.createElement("br");
  createdDiv.appendChild(br);
  const createdSpan = document.createElement("span");
  createdSpan.innerHTML = "Contador: ";
  createdDiv.appendChild(createdSpan);
  //
  const spanZero = document.createElement("span");
  spanZero.setAttribute("id", "span" + count);
  spanZero.innerHTML = "0";
  createdDiv.appendChild(spanZero);
  //
  const createdButton = document.createElement("button");
  createdButton.setAttribute("id", "button" + count);
  createdButton.setAttribute("onclick", "zerar(id)");
  createdButton.innerHTML = "Zerar";
  createdDiv.appendChild(createdButton);
}
function contador(id) {
  const text = inputtext.value;
  countZerar = countZerar + 1;
  document.getElementById(id).childNodes[3].innerHTML = parseInt(countZerar);
  /*
  if (text === "") {
    document.getElementById(id).childNodes[2].innerHTML = parseInt(countZerar);
  } else {
    document.getElementById(id).childNodes[3].innerHTML = parseInt(countZerar);
  }*/
}
function zerar(id) {
  //document.getElementById(id).parentNode.childNodes[1].innerHTML = parseInt(0);
  countZerar = parseInt(0);
  --countZerar;
}

function corAleatoria() {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  let cor = "rgb(" + a + "," + b + "," + c + ")";
  return cor;
}
