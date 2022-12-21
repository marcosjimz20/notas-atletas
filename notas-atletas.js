let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   function nomeAtleta(nome) {
      return "Atleta: " + nome;
   }
   
   function notaAtleta(nota) {
      return "Notas Obtidas: " + nota.sort();
   }
   
   function mediaValida(notas) {
   let soma = 0;
   notas = notas.sort();
   notas = notas.slice(1, 4);
   notas.forEach(function(nota){
   soma = soma + nota;
   });
   let media = soma / notas.length;
   return "Média Válida: " + media;
   }
   
   let cesar = atletas[0];
   console.log(nomeAtleta(cesar.nome));
   console.log(notaAtleta(cesar.notas));
   console.log(mediaValida(cesar.notas));
   console.log("---")
   
   let fernando = atletas[1];
   console.log(nomeAtleta(fernando.nome));
   console.log(notaAtleta(fernando.notas));
   console.log(mediaValida(fernando.notas));
   console.log("---")
   
   let daiane = atletas[2];
   console.log(nomeAtleta(daiane.nome));
   console.log(notaAtleta(daiane.notas));
   console.log(mediaValida(daiane.notas));
   console.log("---");
   
   let bruno = atletas[atletas.length - 1];
   console.log(nomeAtleta(bruno.nome));
   console.log(notaAtleta(bruno.notas));
   console.log(mediaValida(bruno.notas));
   console.log("---FIN---");