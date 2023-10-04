function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  motraAtor();
  mostraCarro();  
  movimentaCarro();
  movimentaAtor();
  voltaCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}

