const Z = 0
export const createPeano = (num, s = {}) => {
  return num === Z
    ? s
    : { s: createPeano(--num, s) }
}

export const incrementalPeano = (p1) => {
  return { s: p1 }
}

export const decrementalPeano = (p1) => {
  return p1.s
}

export const ZERO = {}
export const ZEROStr = JSON.stringify(ZERO)
export const isEqualZero = (p) => JSON.stringify(p) === ZEROStr