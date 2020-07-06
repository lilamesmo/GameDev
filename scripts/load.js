function preload() {
  imagemGameOver = loadImage('imagens/assets/gameover.png'); 
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png'); 
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3'); 
  somPulo = loadSound('sons/somPulo.mp3');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf'); 
  fita = loadJSON('fita/fita.json');
} //criando as imagens