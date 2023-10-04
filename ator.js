let yAtor = 370;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;


function motraAtor(){
  image(imagemAtor, xAtor, yAtor, 28, 28);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()) {
    yAtor +=3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i+ 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if (colisao){
      voltaAtor();
      somColisao.play();
      if (meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtor(){
  yAtor = 370;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,0));
  text(meusPontos, width / 5, 27);
  
}

function marcaPontos(){
  if (yAtor < 15){
      meusPontos += 1;
      somPonto.play();
      voltaAtor();
      }
}

function podeSeMover(){
  return yAtor < 370;
}