function converterParaBase10(x=0, y=0) {
    if (x != 0 && y != 0) {
        var base = x;
        var valor = Number(y);
    } else {
        var base = document.querySelector('#paraBase10').value;
        var valor = Number(document.querySelector('#valorParaBase10').value);
    }
    
    let valorResultado = 0;
    let lista = [];
    let listaValor = valor.toString();

    if (base == 'nulo') {
        return 'Opção inválida';

    } else if (valor == 0) {
        return 0;

    } else {
        base = Number(base)

        for(var i = 0; i < listaValor.length; i++) {
            lista.push(listaValor[i]);
        }
        
        if (base >= 11) {
            for(var i = 0; i < lista.length; i++) {
                if(lista[i] == 'A' || lista[i] == 'a') {
                    lista[i] = 10;
                } else if (lista[i] == 'B' || lista[i] == 'b') {
                    lista[i] = 11;
                } else if (lista[i] == 'C' || lista[i] == 'c') {
                    lista[i] = 12;
                } else if (lista[i] == 'D' || lista[i] == 'd') {
                    lista[i] = 13;
                } else if (lista[i] == 'E' || lista[i] == 'e') {
                    lista[i] = 14;
                } else if (lista[i] == 'F' || lista[i] == 'f') {
                    lista[i] = 15;
                } else if (lista[i] == 'G' || lista[i] == 'g') {
                    lista[i] = 16;
                } else if (lista[i] == 'H' || lista[i] == 'h') {
                    lista[i] = 17;
                } else if (lista[i] == 'I' || lista[i] == 'i') {
                    lista[i] = 18;
                } else if (lista[i] == 'J' || lista[i] == 'j') {
                    lista[i] = 19;
                } else if (lista[i] == 'K' || lista[i] == 'k') {
                    lista[i] = 20;
                } else if (lista[i] == 'L' || lista[i] == 'l') {
                    lista[i] = 21;
                } else if (lista[i] == 'M' || lista[i] == 'm') {
                    lista[i] = 22;
                } else if (lista[i] == 'N' || lista[i] == 'n') {
                    lista[i] = 23;
                } else if (lista[i] == 'O' || lista[i] == 'o') {
                    lista[i] = 24;
                } else if (lista[i] == 'P' || lista[i] == 'p') {
                    lista[i] = 25;
                } else if (lista[i] == 'Q' || lista[i] == 'q') {
                    lista[i] = 26;
                } else if (lista[i] == 'R' || lista[i] == 'r') {
                    lista[i] = 27;
                } else if (lista[i] == 'S' || lista[i] == 's') {
                    lista[i] = 28;
                } else if (lista[i] == 'T' || lista[i] == 't') {
                    lista[i] = 29;
                } else if (lista[i] == 'U' || lista[i] == 'u') {
                    lista[i] = 30;
                } else if (lista[i] == 'V' || lista[i] == 'v') {
                    lista[i] = 31;
                } else if (lista[i] == 'W' || lista[i] == 'w') {
                    lista[i] = 32;
                } else if (lista[i] == 'X' || lista[i] == 'x') {
                    lista[i] = 33;
                } else if (lista[i] == 'Y' || lista[i] == 'y') {
                    lista[i] = 34;
                } else if (lista[i] == 'Z' || lista[i] == 'z') {
                    lista[i] = 35;
                }
            }
        }

        for(var i = 0; i < lista.length; i++) {
            lista[i] = Number(lista[i]);
        }

        let contador = 0
        for(var i = lista.length - 1; i >= 0; i--) {
            valorResultado += (lista[contador]) * base ** i;
            contador++;
        }
        return valorResultado;
    } 
}

function converterDaBase10(x=0, y=0) {
    if (x != 0 && y != 0) {
        var base = x;
        var valor = Number(y);
    } else {
        var base = document.querySelector('#daBase10').value;
        var valor = Number(document.querySelector('#valorDaBase10').value);
    }
   
    let lista = [];
    let valorResultado = '';

    if (base == 'nulo') {
        return 'Opção inválida';

    } else if (valor == 0) {
        return 0;

    } else {
        base = Number(base)

        while (valor > 0) {
            if (valor % base > 0) {
                lista.push(valor % base);
            } else {
                lista.push(0);
            }
            valor = parseInt(valor / base);
        }

        lista.reverse();

        if (base >= 11) {
            for(var i = 0; i < lista.length; i++) {
                if(lista[i] == 10) {
                    lista[i] = 'A';
                } else if (lista[i] == 11) {
                    lista[i] = 'B';
                } else if (lista[i] == 12) {
                    lista[i] = 'C';
                } else if (lista[i] == 13) {
                    lista[i] = 'D';
                } else if (lista[i] == 14) {
                    lista[i] = 'E';
                } else if (lista[i] == 15) {
                    lista[i] = 'F';
                } else if (lista[i] == 16) {
                    lista[i] = 'G';
                } else if (lista[i] == 17) {
                    lista[i] = 'H';
                } else if (lista[i] == 18) {
                    lista[i] = 'I';
                } else if (lista[i] == 19) {
                    lista[i] = 'J';
                } else if (lista[i] == 20) {
                    lista[i] = 'K';
                } else if (lista[i] == 21) {
                    lista[i] = 'L';
                } else if (lista[i] == 22) {
                    lista[i] = 'M';
                } else if (lista[i] == 23) {
                    lista[i] = 'N';
                } else if (lista[i] == 24) {
                    lista[i] = 'O';
                } else if (lista[i] == 25) {
                    lista[i] = 'P';
                } else if (lista[i] == 26) {
                    lista[i] = 'Q';
                } else if (lista[i] == 27) {
                    lista[i] = 'R';
                } else if (lista[i] == 28) {
                    lista[i] = 'S';
                } else if (lista[i] == 29) {
                    lista[i] = 'T';
                } else if (lista[i] == 30) {
                    lista[i] = 'U';
                } else if (lista[i] == 31) {
                    lista[i] = 'V';
                } else if (lista[i] == 32) {
                    lista[i] = 'W';
                } else if (lista[i] == 33) {
                    lista[i] = 'X';
                } else if (lista[i] == 34) {
                    lista[i] = 'Y';
                } else if (lista[i] == 35) {
                    lista[i] = 'Z';
                }
            }
        }

        for(var i = 0; i < lista.length; i++) {
            valorResultado += lista[i].toString();
        }

        return valorResultado;
    }
    
}

function conversao0(event) {
    let resultado = document.getElementsByTagName('h3')[0];
    resultado.innerText = `Resultado: ${converterParaBase10()}`;
    event.preventDefault();
}

function conversao1(event) {
    let resultado = document.getElementsByTagName('h3')[1];
    resultado.innerText = `Resultado: ${converterDaBase10()}`;
    event.preventDefault();
}

function conversao2(event) {
    let resultado = document.getElementsByTagName('h3')[2];
    let base1 = document.querySelector('#daBaseInicial').value;
    let base2 = document.querySelector('#daBaseFinal').value;
    let valor = document.querySelector('#valorDaBaseInicial').value;
    primeiraBase = converterParaBase10(base1, valor);
   
    resultado.innerText = `Resultado: ${converterDaBase10(base2, primeiraBase)}`;
    event.preventDefault();
}

let btnParaBase10 = document.querySelector('#btnParaBase10');
let btnDaBase10 = document.querySelector('#btnDaBase10');
let btnBaseGenerica = document.querySelector('#btnDasDuasBases');

btnParaBase10.addEventListener("click", conversao0);
btnDaBase10.addEventListener("click", conversao1);
btnBaseGenerica.addEventListener("click", conversao2);
