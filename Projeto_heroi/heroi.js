// Nome do heroi
let nomeHeroi = "Super Barbie";
let experiencia = 7200; // Substituir XP 

// Experiencia do Heroi
let classificacao;

if (experiencia < 1000) {
    classificacao = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    classificacao = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    classificacao = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    classificacao = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    classificacao = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    classificacao = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    classificacao = "Imortal";
} else if (experiencia >= 10001) {
    classificacao = "Radiante";
}

// Exibindo o resultado
console.log(`Herói: ${nomeHeroi}`);
console.log(`XP: ${experiencia}`);
console.log(`Classificação: ${classificacao}`);
