export function pangram (letter: string) {
  const pattern = /^(?=.*[a|á])(?=.*b)(?=.*c)(?=.*d)(?=.*[e|é])(?=.*f)(?=.*g)(?=.*h)(?=.*[i|í])(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*[n])(?=.*[ñ])(?=.*[o|ó])(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*[u|ú])(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z).*$/

  return pattern.test(letter.toLocaleLowerCase())
}
