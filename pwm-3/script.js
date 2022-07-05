const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

function contador() {
  for (let i = 0; i <= 10; i = i + 1) {
    div1.innerHTML = i;
  }
}
