const Z = 0
const createPeano = (num, s = {}) => {
  return num === Z
    ? s
    : { s: createPeano(--num, s) }
}

const zero = createPeano(0)
const one = createPeano(1)
const two = createPeano(2)
const three = createPeano(3)

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

const multiplePeano = (p1, p2, p3 = {}) => {
  if (p2.s == null) {
    return p3;
  } else {
    p2 = p2.s
    p3 = addPeano(p1, p3)
    return multiplePeano(p1, p2, p3)
  }
}

console.log(
  JSON.stringify(
    multiplePeano(two, three)
  ),

  // JSON.stringify(
    // addPeano(one, zero),
    // two
  // ),


  // JSON.stringify(
  //   minusPeano(three, zero),
  // )
)


/**
 * z        + n   =  n        P-Zero
 * S(z)     + n   =  S(n)     P-Succ
 * S(S(z))  + n   =  S(S(n))  P-Succ
 */

 /**
 * z        times n   =  Z        T-Zero
 * Z times n = Z && n + Z = n
 * S(Z) times n = n
 * 
 * 
 * S(z)     times n   =  S(n)     P-Succ
 * S(S(z))  + n   =  S(S(n))  P-Succ
 */