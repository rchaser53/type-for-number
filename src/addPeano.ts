import {
  isEqualZero,
  incrementalPeano
} from './util'

const addPeano = (p1, p2) => {
  if (isEqualZero(p2)) {
    return p1;
  } else {
    p2 = p2.s
    p1 = incrementalPeano(p1)
    return addPeano(p1, p2)
  }
}
export default addPeano