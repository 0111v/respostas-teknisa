const button = document.getElementById('colorBtn');
const cores = ['vermelho', 'verde', 'azul'];
let index = 0;

button.classList.add(cores[index]);

button.addEventListener('click', () => {
  button.classList.remove(cores[index]);   
  index = (index + 1) % cores.length;       
  button.classList.add(cores[index]);       
});
