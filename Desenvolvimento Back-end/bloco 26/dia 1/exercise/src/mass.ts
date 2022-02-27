const units = ["kg", "hg", "dag", "dg", "g", "cg", "mg"];

function makeError(unity: string) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

export function convert(value: number, forUnity: string, toUnity: string): number {

    if (!units.includes(forUnity)) makeError(forUnity);
    if (!units.includes(toUnity)) makeError(toUnity);

    const forIndex = units.indexOf(forUnity);
    const toIndex = units.indexOf(toUnity);
    const exponent = (toIndex - forIndex);

    return value * Math.pow(10, exponent);
}