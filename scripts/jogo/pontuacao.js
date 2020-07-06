class Pontuacao {
  constructor(){
   this.pontos = 0;
  }
  
  exibe(){
    textAlign(RIGHT) //definição de alinhamento
    fill('#fff')     //definição de cor 
    textSize(50);    //definição de tamanho
    text(parseInt(this.pontos), width -30, 50); //possição na tela e definição de inteiro
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2; //proproção de crescimento
  }
  
}//classe para definição de ponto