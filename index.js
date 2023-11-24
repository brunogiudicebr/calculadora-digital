const resultado = document.getElementById('resultado')
const  numeros = document.querySelectorAll('[id*=Tecla]')
const operadores = document.querySelectorAll('[id*=operador]')
let novoNumero=true
let operador;
let numeroGuardado;


const operaçãoPendente = () => operador !== undefined


const calcular = () =>{
    
    
    if(operaçãoPendente()){
        const numeroAtual = (resultado.textContent)
        novoNumero=true;
        if(operador =='+') {
            
            atualizarResultado(Number(numeroGuardado) + Number(numeroAtual))
            
        }
        else if(operador =='-'){
            
            atualizarResultado(Number(numeroGuardado) - Number(numeroAtual))
            
        }
        else if(operador =='÷'){
            
            atualizarResultado(numeroGuardado / numeroAtual )
            
        }
        else if(operador == 'x'){
            atualizarResultado(numeroGuardado * numeroAtual)
        }
        
        
    } 
}
const iprimirNumero = (evento) => {atualizarResultado(evento.target.textContent)}
const atualizarResultado= (texto) => {
    if(novoNumero){
        resultado.textContent = texto; novoNumero=false }
        else{resultado.textContent += texto}}
        
        numeros.forEach (numero => numero.addEventListener('click',iprimirNumero))
        
        imprimirOperador = (evento) => {
            if(!novoNumero){
                calcular()
                novoNumero=true   
                operador = evento.target.textContent
                numeroGuardado= resultado.textContent
                
                
                console.log(operador)
        console.log(numeroGuardado)
    }

    
}

operadores.forEach (operador => operador.addEventListener('click',imprimirOperador))

const limparDisplay = () => {resultado.textContent=''; operador=''}
document.getElementById('operador-clear').addEventListener('click', limparDisplay)

const apagar = () =>
    resultado.textContent = resultado.textContent.slice(0,-1)
document.getElementById('operador-menor').addEventListener('click',apagar)

const tiverPonto = () =>  resultado.textContent.indexOf('.')!== -1
const existeValor = () => resultado.textContent.length > 0;
const decimal = () =>{
    if(!tiverPonto()){
        if(existeValor()){
            atualizarResultado('.')}  
            else{
                atualizarResultado('0.')}
        
        }
}
document.getElementById('ponto').addEventListener('click', decimal)