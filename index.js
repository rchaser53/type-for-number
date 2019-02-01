const Z = 0
const createPeano = (num, s = {}) => {
  return num === Z
    ? s
    : { s: createPeano(--num, s) }
}

const three = createPeano(3)
const one = createPeano(1)

const incrementalPeano = (p1) => {
  return { s: p1 }
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

console.log(
  // incrementalPeano(one),
  JSON.stringify(
    three
  ),
  JSON.stringify(
    addPeano(one, three),
  ) 
)

// console.log(
//   createPeano(0),
//   createPeano(1),
//   createPeano(2),
//   JSON.stringify(createPeano(10)),
// )