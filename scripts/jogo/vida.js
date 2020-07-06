class Vida {
   constructor(vidaMax, vidaInicial){
     this.vidaMax = vidaMax;
     this.vidaInicial = vidaInicial;
     this.vidas = this.vidaInicial;
     
     this.largura = 25;
     this.altura = 25;
     this.xInicial = 20;
     this.yInicial = 20;
     
   }
  
  draw() {
    for(let i = 0; i < this.vidas; i++) {
      const margem = i * 10;
      const posicao = this.xInicial * (i + 1);
      image(imagemVida,posicao + margem, this.yInicial, this.largura, this.altura);
    }
  }
  
  ganhaVida() {
    if(this.vidas <= this.vidaMax) {
      this.vidas++;
       }
  }
  
  perdeVida() {
    this.vidas--;
  }
}