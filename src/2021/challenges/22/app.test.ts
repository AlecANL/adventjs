import { expect, test } from 'vitest'
import { countDecorations } from './app'

test('Should return 6', () => {
// tenemos el árbol en forma de objeto
  const tree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
      value: 2, // el nodo izquierdo necesita dos decoraciones
      left: null, // no tiene más ramas
      right: null // no tiene más ramas
    },
    right: {
      value: 3, // el nodo de la derecha necesita tres decoraciones
      left: null, // no tiene más ramas
      right: null // no tiene más ramas
    }
  }

  /* Gráficamente sería así:
    1
  /   \
 2     3

1 + 2 + 3 = 6
*/

  const result = countDecorations(tree) // 6
  expect(result).toBe(6)
})

test('Should return 28', () => {
  const bigTree = {
    value: 1,
    left: {
      value: 5,
      left: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: null
      },
      right: null
    },
    right: {
      value: 6,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: {
        value: 1,
        left: null,
        right: null
      }
    }
  }

  /*
          1
        /   \
       5     6
      /     / \
     7     5   1
    /
   3
  */

  const result = countDecorations(bigTree) // 28
  expect(result).toBe(28)
})
