//cruella 12,comedia , aventura
//procurando nemo , livre , aventura, comedia 
//a freira , 14, terror , misterio 
//enola holmes , 12 , misterio 
//meu malvado favorito 4,10, comedia , infantil
//a noiva cadaver, livre, fantasia 
//coraline e o mundo secreto , 10, terror fantasia 
let campoOrcamento;
let campoPraia;
let campoCidadeGrande;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("idade");
  campoOrcamento = createInput("12");
  campoPraia = createCheckbox("Gosta de fantasia?");
  campoCidadeGrande = createCheckbox("Gosta de comedia e misterio?");
}

function draw() {
  background("#9C27B0");
  let gostaDeFantasia = campoFantasia.checked();
  let gostaComedia = campoComedia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeComedia, gostaDeFantasia);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeComedia) {
  if (idade >= 14) {
    if (gostaDeFantasia) {
      return "cruella";
    } else if (gostaDeCidadesGrandes) {
      return "freira";
    } else {
      return "procurando nemo";
    }
  } else if (idade>= 12) {
    if (gostaDeFantasia) {
      return "noiva cadaver";
    } else if (gostaDeComedia) {
      return "coraline e o mundo secreto";
    } else {
      return "meu malvado favorito 4";
    }
  } else {
    if (gostaDeFantasia) {
      return "";
    } else if (gostaDeCidadesGrandes) {
      return "enola holmes 2";
    } else {
      return "coraline e o mundo secreto";
    }
  }
}