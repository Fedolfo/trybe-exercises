function numerosOpostos(number) {
  if (typeof number !== 'number') return ('Apenas números');
  if (number > 0) return ('positivo');
  if (number === 0) return ('neutro');
  if (number < 0) return ('negativo');
}

module.exports = {
  numerosOpostos,
}
