function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop(0, 1, 0.2);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
   jogo,
   telaInicial
    
  };
  botaoGerenciador = new BotaoGerenciador('JOGAR', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}