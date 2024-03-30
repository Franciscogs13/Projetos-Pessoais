
document.addEventListener("DOMContentLoaded", function() {
    const peso = document.querySelector("#peso");
    const altura = document.querySelector("#altura");
    const btnCalcular = document.querySelector("#btnCalcular");
    const resultado = document.querySelector("#res");

    btnCalcular.addEventListener("click", (evt) => {
        let validaPeso=peso.validity
        let validaAltura=altura.validity
            
        if(!validaPeso.valid||!validaAltura.valid) {
            peso.style.borderColor="red"
            altura.style.borderColor="red"
            resultado.innerHTML="<p>*Preencha os campos corretamente!</p> <style> p{color: red;} </style>" 
        }else{
            calcularIMC(Number(peso.value),Number(altura.value))
            peso.style.borderColor="black"
            altura.style.borderColor="black"
        }
        limpar()
    });

    function calcularIMC(peso, altura) {
        const imc= peso/(altura**2);
        resultado.innerHTML=`<p>Seu IMC é: ${imc.toFixed(2)}</p> <style> p{color:green;}</style><br>`
        switch(true){
            case(imc<18.5):
                resultado.innerHTML += `<p>Você está abaixo do Peso.</p><style>p{color:red;}</style>`;
                break;
            case(imc>=18.5 && imc<24.9):
                resultado.innerHTML += `<p>Você está com peso ideal. Parabéns!</p>`;
                break;
            case(imc>=24.9 && imc<29.9):
                resultado.innerHTML+='<p>Você está com excesso de Peso.</p><style>p{color:red;}</style>';
                break;
            case (imc>=30 && imc<=34.9):
                resultado.innerHTML+= '<p>Você está com obesidade Grau I.</p><style>p{color:red;}</style>'
                break;
            case (imc >=35 && imc<=39.9):
                resultado.innerHTML +='<p>Você está com obesidade Grau II (severa).</p><style>p{color:red;}</style>'
                break;
            default:
                resultado.innerHTML +=`<p>Você está com obesidade Grau III (móbil).</p><style>p{color:red;}</style>`
        }
        return imc
    }
    function  limpar(){
        peso.value=""
        altura.value=""
        
        peso.focus()
    }

});
