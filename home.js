const usuarios = [];
const pagos = [];
const usuario = document.getElementById("nombre");
const pago = document.getElementById("pago");
const listado = document.getElementById("list-group");
const resultadoTotal = document.getElementById("resultado");
const lista = document.getElementById();
const resultado = document.getElementById();

function repartir() {
  agregarGastos();
  ultimoEnPantalla();
  total();
}

function agregarGastos() {
  usuarios.push(usuario.value);
  pagos.push(pago.value);
}

function ultimoEnPantalla() {
  const li = document.createElement("li");
  const text = document.createTextNode(`${usuario.value} Pagó $${pago.value}`);
  li.classList.add("list-group-item");

  li.appendChild(text);
  listado.appendChild(li);
}

function sumaTotal(pagos) {
  let suma = 0;
  for (let pago of pagos) {
    suma += parseInt(pago);
  }
  return suma;
}

function total() {
  const total = sumaTotal(pagos);
  const pagosDeUsuarios = total / usuarios.length;
  resultadoTotal.innerHTML = `El Total es: $${total} \n
  Cada uno paga: $${pagosDeUsuarios}`;
  resultadoTotal.style.display = "flex";
}
