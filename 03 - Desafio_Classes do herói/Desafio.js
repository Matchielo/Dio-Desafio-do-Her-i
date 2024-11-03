
let vidaTotalMonstro = 150

class grupo {
    constructor(tipoHerói, tipoAtaque, dano,){
        this.tipoHerói = tipoHerói
        this.tipoAtaque = tipoAtaque
        this.dano = dano
    }

    acao(){

        vidaTotalMonstro -= this.dano

        console.log(`Monstro - VIda: ${this.vidaTotalMonstro}`)
        console.log(`O ${this.tipoHerói} usou ${this.tipoAtaque} para atacar e deeu um total de ${this.dano} dano`)
        console.log(`A vida do monstro diminuiu para: ${vidaTotalMonstro}`)
        console.log(' ')
    }
}

let ataque = new grupo("Mago", "Magia", 25)
ataque.acao()

ataque = new grupo("Guerreiro", "Espada", 50)
ataque.acao()

ataque = new grupo("Monje", "Artes Marciais", 20)
ataque.acao()

ataque = new grupo("Ninja", "shuriken", 15)
ataque.acao()

