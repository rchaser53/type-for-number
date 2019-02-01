import {
  isEqualZero,
  decrementalPeano
} from './util'

const subPeano = (p1, p2) => {
  if (isEqualZero(p2)) {
    return p1;
  } else {
    p2 = p2.s
    p1 = decrementalPeano(p1)
    return subPeano(p1, p2)
  }
}

export default subPeano