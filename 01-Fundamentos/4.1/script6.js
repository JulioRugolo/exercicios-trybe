let candidato = 'reprovada'

switch(candidato){
    case "aprovada":
        console.log("Parabens, você foi aprovado(a)");
        break;

    case "lista":
        console.log("Você está na nossa lista de espera");
        break;

    case "reprovada":
        console.log("Você foi reprovado(a)");
        break;

    default:
        console.log("Informação incorreta")
}