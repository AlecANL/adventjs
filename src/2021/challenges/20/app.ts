export function pangram (letter: string) {
  const pattern = /^(?=.*[a|á])(?=.*b)(?=.*c)(?=.*d)(?=.*[e|é])(?=.*f)(?=.*g)(?=.*h)(?=.*[i|í])(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*[n])(?=.*[ñ])(?=.*[o|ó])(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*[u|ú])(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z).*$/

  return pattern.test(letter.toLocaleLowerCase())
}

/*

function pangram(letter) {
  const all = [...'abcdefghijklmnopqrstuvwxyz']
  const normalized = letter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  let res = true

  all.forEach(char => {
    if (!normalized.includes(char)) res = false
  })
  if (res) return letter.includes('ñ')

  return res
}

*/
