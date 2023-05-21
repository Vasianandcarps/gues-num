let n = Math.floor(Math.random() * 100);
let rand = Math.floor(Math.random() * n);
while (true) {
  let b = prompt("Введите число от 1 до " + n);

  if (isNaN(b)) {
    alert("Введите число!");
    break;
  } else if (rand == b) {
    alert("Вы выиграли!");
    break;
  } else if (b < rand) {
    alert("Введите число больше");
  } else {
    alert("Введите число меньше");
  }
}
