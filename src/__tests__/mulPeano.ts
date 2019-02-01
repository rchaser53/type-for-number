import { createPeano } from '../util'
import mulPeano from '../mulPeano'

describe('mulPeano', () => {
  const zero = createPeano(0)
  const one = createPeano(1)
  it('0 * 1 = 0', () => {

    expect(
      mulPeano(zero, one)
    ).toEqual(zero)
  })
})