/* 1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */
let a = 100
let b = 30
function sum(a, b) {
  return ["soma -", a - b,"soma +", a + b,"soma de vezes *", a * b,"soma de divisão /", a / b,"soma de modulo %", a % b]
}

console.log(sum(a,b))
