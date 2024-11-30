//1° Desafio felipão

const nomeDoHeroi = "Aquiles"
let xp = 8455
let classeDoHeroi

switch (true) {
    case xp >= 0 && xp <= 1000:
        classeDoHeroi ="Ferro"
        break
     case xp >= 1001 && xp <= 2000:
        classeDoHeroi ="Bronze"
        break
    case xp >= 2001 && xp <= 5000:
        classeDoHeroi ="Prata"
        break
    case xp >= 6001 && xp <= 7000:
        classeDoHeroi ="Ouro"
        break
    case xp >= 7001 && xp <= 8000:
        classeDoHeroi ="Platina"
        break
    case xp >= 8001 && xp <= 9000:
        classeDoHeroi ="Ascendente"
        break
    case xp >= 9001 && xp <= 10000:
        classeDoHeroi ="Imortal"
        break
    case xp > 10001:
        classeDoHeroi ="Raidante"
        break
}

console.log("O Herói de Nome "+ nomeDoHeroi + ", está no nível de " + classeDoHeroi)