import './src/assets/css/tailwind.css';

//.nombre-clase   si es id #nombre-div y si es etiqueta solo la etiqueta
const h1= document.querySelector('h1');
const app = document.getElementById('app');

h1.textContent = "Hola texto Modificado";
app.style.padding = "1rem";
app.style.background = "orange";

const divs = app.querySelectorAll("div");

// classList -> add remove | agrega o remueve una clase
divs.forEach((e,i) => {
  e.textContent = `Item ${i}`;
  e.classList.add('bg-white','rounded-md','shadow-2xl','shadow-blue-500');
});
//55:00