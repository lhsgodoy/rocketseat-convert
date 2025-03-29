
//
// Cotação de moedas do dia.

const USD = 5.76
const EUR = 6.23
const GBP = 7.46

// Obtendo os elementos do formulario.

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description =document.getElementById("description")
const result = document.getElementById("result")

// Manibulando o input amount para receber somente numeros

amount.addEventListener("input", () => {
    const hasCaractersRegex = /\D+/g
       amount.value = amount.value.replace(hasCaractersRegex, "")
    
}

)

// Capturando o evento de submit no formulario
form.onsubmit = (event) => {

    //evita que a pagina seja regarregada
    event.preventDefault() 

 switch (currency.value) 
 {
    case "USD": 
    convertCurrency(amount.value, USD,"US$")
    break
 
    case "EUR": 
    convertCurrency(amount.value, EUR,"€")
    break

    case "GBP":
        convertCurrency(amount.value, GBP,"£")
    break
    }
}

//Função para converter a moeda

function convertCurrency(amount, price, symbol) {
   
    try {

        // Atualizando o footer (cotação da moeda)

        description.textContent 
        = `${symbol} 1= ${formatCurrencyBRL(price)} `

        //Calcula o total e troca o . por , 
        let total 
        = String(amount * price).replace(".", ",")

        // exibe a resultado total
        result.textContent = `${total} Reais` 

        //Aplica a classe que exibe o footer para mostrar o resultado

        footer.classList.add("show-result")


    } 
    catch (error) {

        console.log(error) 

        // remove a classe do footer removendo ele da tela

        footer.classList.remove("show-result")
        alert ("Não foi possivel converter, tente novamente")
    }

}

// Formata a moeda em Real Brasileiro

function formatCurrencyBRL(value) {

    // Converte para numero para utilizar o tolocalestring para formatar em brl
    return Number(value)
    .toLocaleString("pt-BR", 
         {
        style: "currency",
        currency: "BRL",
        
        
    }
    
)

}



