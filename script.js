
const salones = {
  "C4": { piso: "baja", x: 350, y: 300 },
  "D8": { piso: "baja", x: 600, y: 350 },
  "FA": { piso: "alta", x: 700, y: 380 },
  "B6": { piso: "alta", x: 280, y: 180 },
};

function buscarSalon() {
  const input = document.getElementById("search").value.toUpperCase();
  const info = salones[input];
  const marcador = document.getElementById("marcador");
  const mapa = document.getElementById("mapa");

  if (!info) {
    alert("Salón no encontrado.");
    marcador.style.display = "none";
    return;
  }

  if (info.piso === "baja") {
    mapa.src = "planta_baja.png";
  } else {
    mapa.src = "planta_alta.png";
  }

  mapa.onload = () => {
    marcador.style.display = "block";
    marcador.style.left = info.x + "px";
    marcador.style.top = info.y + "px";
  };
}
