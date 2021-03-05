import test from 'ava'
import Example from '../src/'

test('Example', (t) => {
  const ex = new Example('James')
  t.deepEqual(ex.name, 'James', 'Expected name to be the one provided')
})
