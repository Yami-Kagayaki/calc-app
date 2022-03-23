function insert(num) {
  var carac = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = carac + num;
}

function cleanOne() {
  var carac = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = carac.substring(
    0,
    carac.length - 1
  );
}

function clean() {
  document.getElementById("tela").innerHTML = "";
}

function calc() {
  var calc = document.getElementById("tela").innerHTML;

  if (calc) {
    document.getElementById("tela").innerHTML = eval(calc);
  } else {
    alert("Precisa de números para calcular!");
  }
}
