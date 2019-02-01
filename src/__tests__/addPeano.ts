import { createPeano } from '../util'
import addPeano from '../addPeano'

describe('addPeano', () => {
  const zero = createPeano(0)
  const one = createPeano(1)
  it('1 + 0 = 1', () => {

    expect(
      addPeano(one, zero)
    ).toEqual(one)
  })
})