import { expect, test } from 'vitest'
import { contains } from './app'

test('Should return true', () => {
  const almacen = {
    estanteria1: {
      cajon1: {
        producto1: 'coca-cola',
        producto2: 'fanta',
        producto3: 'sprite'
      }
    },
    estanteria2: {
      cajon1: 'vacio',
      cajon2: {
        producto1: 'pantalones',
        producto2: 'camiseta' // <- ¡Está aquí!
      }
    }
  }

  const result = contains(almacen, 'camiseta') // true
  expect(result).toBe(true)
})

test('Should return false', () => {
  const otroAlmacen = {
    baul: {
      fondo: {
        objeto: 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }

  const result = contains(otroAlmacen, 'gameboy') // false
  expect(result).toBe(false)
})
