export function isValid (letter: string) {
  const PATTERN_LETTER_PACKAGED = /^\(([^()\r\n\d\W]*[áéíóúÁÉÍÓÚüÜñÑa-zA-Z]+[^()\r\n\d\W]*)\)$/
  const PATTERN_LETTER_ALPHABETIC = /^[a-zA-Z]+$/
  const listOfLetters = letter.split(' ')

  return listOfLetters.every(word => {
    const isValidFirst = PATTERN_LETTER_PACKAGED.test(word)
    const isValidSecond = PATTERN_LETTER_ALPHABETIC.test(word)

    return (isValidFirst || isValidSecond)
  })
}
