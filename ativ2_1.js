let qtd = parseInt(prompt('Informe quantos númeors serão cadastrados: '))
let note = []
let soma = 0

for(let x = 1; x<= qtd; x++){
    y = parseInt( prompt(`Digite o ${x}º número: `))
    note.push(y)
    soma = soma + y
    media= soma / qtd
    document.write(`<p>O ${x}º número cadastrado foi: ${y}<p><br>`)
    document.write(`<p>------------------------------------------------<p>`)
    document.write(`<p>Sua raiz quadrada é: ${Math.sqrt(y)} <p><br>`)
    document.write(`<p>------------------------------------------------<p>`)
    document.write(`<p>Sua raiz cúbica é: ${Math.cbrt(y)}<p><br>`)
    document.write(`<p>------------------------------------------------<p>`)
    document.write(`<p>Sua potência de 2 é: ${Math.pow(y, 2)}<p><br>`)
    document.write(`<p>------------------------------------------------<p>`)
}
document.write(`<p>A soma total é: ${soma}</p><br>`)
document.write(`<p>----------------------------------------------------<p>`)

document.write(`<p>A média de todos os números é: ${media}</p><br>`)