//codigo carros
let yCarros = [40, 95, 150, 210, 265, 320];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2, 2.5, 4, 3, 2.8, 2.6];
let comprimentoCarros = 60;
let alturaCarros = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+ 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);  
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+ 1){
    xCarros[i] -= velocidadeCarros[i];
  }
 
}

function voltaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+ 1)
  if (xCarros[i] < -50){
    xCarros[i] = 600
  }
}
