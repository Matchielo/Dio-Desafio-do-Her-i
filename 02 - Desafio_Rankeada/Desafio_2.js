
// Definir só as derrotas
results_rankeada = rankeada(110)
results_ranks = define_rank(results_rankeada)

console.log("Arena 1")
console.log(`O jogador teve um total de ${results_rankeada} vitórias do total de 110 partidas`)
console.log(`Seu rank é: ${results_ranks}`)
console.log("")

results_rankeada = rankeada(0)
results_ranks = define_rank(results_rankeada)

console.log("Arena 2")
console.log(`O jogador teve um total de ${results_rankeada} vitórias do total de 110 partidas`)
console.log(`Seu rank é: ${results_ranks}`)
console.log("")

results_rankeada = rankeada(50)
results_ranks = define_rank(results_rankeada)

console.log("Arena 3")
console.log(`O jogador teve um total de ${results_rankeada} vitórias do total de 110 partidas`)
console.log(`Seu rank é: ${results_ranks}`)
console.log("")

function rankeada(defeat, victory = 110){
    let qtd_define = victory - defeat
    return qtd_define
}

function define_rank(rankeada, rank = "Não pode ser definido!"){


    if (rankeada === 110){
        console.log('Incrível - Jogador Invicto!!');
    }

    else if (rankeada === 0){
        console.log('Que pena, melhor treinar um pouco mais.')   ;
    }

    else{

        switch (true){
            case (rankeada <= 10): 
                rank = "Ferro";
                break;

            case (rankeada >= 11 && rankeada <= 10): 
                rank = "Bronze";
                break;

            case (rankeada >= 21 && rankeada <= 50): 
                rank = "Prata";
                break;

            case (rankeada >= 51 && rankeada <= 80): 
                rank = "Ouro";
                break;

            case (rankeada >= 81 && rankeada <= 90): 
                rank = "Diamante";
                break;

            case (rankeada >= 91 && rankeada <= 101): 
                rank = "Lendário";
                break;
                
            default:
                rank = "Imortal";
        }
    }
    return rank

}