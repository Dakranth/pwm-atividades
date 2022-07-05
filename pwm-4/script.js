countZerar = 0;
count = 0;
const inputtext = document.getElementById("inputtext");
function criar() {
  ++count;
  const createdDiv = document.createElement("div");
  createdDiv.innerText = inputtext.value;
  createdDiv.setAttribute("id", "div" + count);
  createdDiv.setAttribute("onclick", "contador()");
  document.body.appendChild(createdDiv);
  const br = document.createElement("br");
  createdDiv.appendChild(br);
  const createdSpan = document.createElement("span");
  createdSpan.innerHTML = "Contador: ";
  createdDiv.appendChild(createdSpan);
  const spanZero = document.createElement("span");
  spanZero.setAttribute("id", "countZero");
  spanZero.innerHTML = "0";
  createdDiv.appendChild(spanZero);
  const createdButton = document.createElement("button");
  createdButton.setAttribute("id", "btn" + count);
  createdButton.setAttribute("onclick", "zerar()");
  createdButton.innerHTML = "Zerar";
  createdDiv.appendChild(createdButton);
}

function contador() {
  countZerar = countZerar + 1;
  document.getElementById("countZero").innerHTML = countZerar;

  //$("div1").find("countZero").innerHTML = countZerar;
}

function zerar() {
  countZerar = 0;
  --countZerar;
}

function corAleatoria() {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  let cor = "rgb(" + a + "," + b + "," + c + ")";
  document.body.style.background = cor;
}
