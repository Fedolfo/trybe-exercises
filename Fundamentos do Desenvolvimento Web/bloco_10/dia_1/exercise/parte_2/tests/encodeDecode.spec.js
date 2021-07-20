const { encode, decode } = require('../decode');

describe('função que codifica e descodifica', () => {
  it('Retorne uma string codificada quando a função encode for utilizada', () => {
    expect(encode('hello')).toBe('h2ll4');
    expect(encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?');
    expect(encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
    expect(encode('go Trybe!')).toBe('g4 Tryb2!');
  });

  it('Retorne uma string decodificada quando a função decode for utilizada', () => {
    expect(decode('h2ll4')).toBe('hello');
    expect(decode('H4w 1r2 y45 t4d1y?')).toBe('How are you today?');
    expect(decode('Th3s 3s 1n 2nc4d3ng t2st.')).toBe('This is an encoding test.');
    expect(decode('g4 Tryb2!')).toBe('go Trybe!');
  });
});