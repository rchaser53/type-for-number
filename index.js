const Z = 0
const createPeano = (num, s = {}) => {
  return num === Z
    ? s
    : { s: createPeano(--num, s) }
}

const three = createPeano(3)
const two = createPeano(2)
const one = createPeano(1)

const incrementalPeano = (p1) => {
  return { s: p1 }
}

const decrementalPeano = (p1) => {
  return p1.s
}

const addPeano = (p1, p2) => {
  if (p2.s == null) {
    return p1;
  } else {
    p2 = p2.s
    p1 = incrementalPeano(p1)
    return addPeano(p1, p2)
  }
}

const minusPeano = (p1, p2) => {
  if (p2.s == null) {
    return p1;
  } else {
    p2 = p2.s
    p1 = decrementalPeano(p1)
    return minusPeano(p1, p2)
  }
}

console.log(
  JSON.stringify(
    three
  ),
  JSON.stringify(
    addPeano(one, three),
  ),
  JSON.stringify(
    minusPeano(three, two),
  )
)


/**
 * z        + n   =  n        P-Zero
 * S(z)     + n   =  S(n)     P-Succ
 * S(S(z))  + n   =  S(S(n))  P-Succ
 */