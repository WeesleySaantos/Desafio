let nomeHeroi = "Araghorn";
let XPHeroi = 1000;

if (XPHeroi < 1000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Ferro`);
} else if (XPHeroi >= 1000 && XPHeroi < 2000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Bronze`);
} else if (XPHeroi >= 2000 && XPHeroi < 5000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Prata`);
} else if (XPHeroi >= 5000 && XPHeroi < 7000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Ouro`);
} else if (XPHeroi >= 7000 && XPHeroi < 8000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Platina`);
} else if (XPHeroi >= 8000 && XPHeroi < 9000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Ascendente`);
} else if (XPHeroi >= 9000 && XPHeroi < 10000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Imortal`);
} else {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Radiante`);
}
