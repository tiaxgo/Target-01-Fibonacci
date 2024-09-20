// Função para gerar a sequência de Fibonacci até o número digitado
function gerarSequenciaFibonacci(limite) {
    let sequencia = [0, 1];
    let i = 2;
    
    while (true) {
        let proximo = sequencia[i - 1] + sequencia[i - 2];
        if (proximo > limite) break;
        sequencia.push(proximo);
        i++;
    }

    return sequencia;
}

// Função para verificar se o número está na sequência de Fibonacci
function verificarFibonacci() {
    const inputNumero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(inputNumero) || inputNumero < 0) {
        resultado.textContent = "Por favor, insira um número válido.";
        resultado.classList.add('erro');
        return;
    }

    const sequenciaFibonacci = gerarSequenciaFibonacci(inputNumero);
    
    if (sequenciaFibonacci.includes(inputNumero)) {
        resultado.textContent = `${inputNumero} pertence à sequência de Fibonacci!`;
        resultado.classList.remove('erro');
        resultado.classList.add('sucesso');
    } else {
        resultado.textContent = `${inputNumero} não pertence à sequência de Fibonacci.`;
        resultado.classList.remove('sucesso');
        resultado.classList.add('erro');
    }
}
