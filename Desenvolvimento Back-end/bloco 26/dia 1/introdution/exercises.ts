// ./exercises.ts

export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}
// Fórmula da Área do Triângulo
export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}
// Fórmula da Área do Quadrado
export function square(side: number): number {
  return side ** 2;
}
// Fórmula da Área do Retângulo
export function rectangle(base: number, height: number): number {
  return base * height;
}