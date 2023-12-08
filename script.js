console.log("Ano novo está chegando!");

let nome = "Mariah Carey";

let idade = 54;

let ano = 2023;

const anoNascimento = ano - idade;

console.log(anoNascimento);

let quartaFeira = true;

console.log(quartaFeira);

console.log(typeof quartaFeira);

let _idade = 18;

if (_idade >= 18) {
  console.log(
    "Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey"
  );
} else {
  console.log("Sinto muito, mas assistirá da tv globo");
}

let aniversario = "Fevereiro";

if (
  aniversario == "Junho" ||
  aniversario == "Agosto" ||
  aniversario == "Dezembro"
) {
  console.log("Uma ou mais opções estão corretas");
} else {
  console.log(
    `Algo de errado não está certo, o mês digitado foi ${aniversario}`
  );
}
