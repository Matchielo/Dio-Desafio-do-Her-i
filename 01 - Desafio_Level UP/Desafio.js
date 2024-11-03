nomeHeroi = 'Mateus'
xp = 0
nivel = ""

while (xp <= 10100) {

if (xp <= 1000){
    nivel = 'Ferro'

}
else if (xp >= 1001 && xp <= 2000) {
    nivel = 'Bronze'

} 
else if (xp >= 2001 && xp <= 5000) {
    nivel = 'Prata'

} 
else if (xp >= 5001 && xp <= 6000) {
    nivel = 'Ouro'

} 
else if (xp >= 6001 && xp <= 7000) {
    nivel = 'Platina'

} 
else if (xp >= 7001 && xp <= 8000) {
    nivel = 'Ascendente'
} 
else if (xp >= 8001 && xp <= 10000) {
    nivel = 'Imortal'
} 
else {
    nivel = 'radiante'
}

console.log(`O Herói ${nomeHeroi} está no nível ${nivel}`)
xp += 100
console.log('XP + 100')

}
console.log(`O Herói ${nomeHeroi} atingiu seu nível máximo de XP`)