"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function makeError(unity) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`);
}
function convert(value, forUnity, toUnity) {
    if (!units.includes(forUnity))
        makeError(forUnity);
    if (!units.includes(toUnity))
        makeError(toUnity);
    const forIndex = units.indexOf(forUnity);
    const toIndex = units.indexOf(toUnity);
    const exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
