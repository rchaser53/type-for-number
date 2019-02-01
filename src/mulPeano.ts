import { isEqualZero } from './util'
import addPeano from './addPeano'

const mulPeano = (p1, p2, p3 = {}) => {
  if (isEqualZero(p2)) {
    return p3;
  } else {
    p2 = p2.s
    p3 = addPeano(p1, p3)
    return mulPeano(p1, p2, p3)
  }
}
export default mulPeano