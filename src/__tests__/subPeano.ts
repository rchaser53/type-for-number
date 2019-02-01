import { createPeano } from '../util'
import subPeano from '../subPeano'

describe('subPeano', () => {
  const zero = createPeano(0)
  const one = createPeano(1)
  it('1 - 0 = 1', () => {

    expect(
      subPeano(one, zero)
    ).toEqual(one)
  })
})