export function cyberReindeer (road: string, time: number) {
  const max = Math.max(road.length, time)
  const result = []
  const x = road

  for (let i = 0; i < max; i++) {
    // if (road[i] === '|' || (idx < 5 && b === '|')) {
    //   idx++
    //   b = road[i]
    //   result.push(x)
    //   x = x.replace(/\|/g, '*')
    //   continue
    // }

    if (i === 4) {
      road = road.replace(/\|/g, '*')
    }

    if (road[i] === '|') {
      result.push(road)
    } else {
      result.push(road)
      const sChar = road.indexOf('S')
      const nextChar = i + 1
      const bb = road.split('')
      const temp = bb[sChar]
      bb[sChar] = bb[nextChar]
      bb[nextChar] = temp

      road = bb.join('')
    }

    // if (road[i] !== '|' && b !== '|') {
    //   result.push(x)
    //   const index = x.indexOf('S')
    //   x = '.' + x.slice(0, index - (i + 1))
    //   // x = '.' + x.slice(0, index) + '.' + x.slice(index, -1)
    //   b = road[i]
    // }
  }

  console.log(x)

  return result
}

const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)
console.log(result)

/*
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..' // passes through the open barrier

  function moverHashDerecha(cadena) {
    const index = cadena.lastIndexOf('#');
    return '.' + cadena.slice(0, index) + '#' + cadena.slice(index, -1);
}
*/
