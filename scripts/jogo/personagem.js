class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    this.contaPulo = 0;
    this.velocidadePulo = 0;
    this.gravidade = 3;
    this.alturaPulo = -30;
    this.invencivel = false;
    
    }
  
  pula() {
    if(this.contaPulo < 2) {
      this.velocidadePulo = this.alturaPulo;
      this.contaPulo++;
      }
    else {
      this.velocidadePulo = 0;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.contaPulo = 0;
    }
  }
  
  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1100);
  }
  
  estaColidindo(inimigo) {
   if (this.invencivel) {
       return false;
       }
    
   const precisao = 0.7;
   const colisao = collideRectRect(
     this.x, 
     this.y,
     this.largura * precisao, 
     this.altura * precisao,
     inimigo.x,
     inimigo.y,
     inimigo.largura * precisao,
     inimigo.altura * precisao
   );
    
    return colisao;
  }
}