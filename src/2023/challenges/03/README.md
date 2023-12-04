[⬅️ Back](https://github.com/AlecANL/adventjs/tree/main/src/2023)

# Challenge #3 😏 The naughty elf

In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

```typescript
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''

```

Please, keep in mind:

* There will always be one different step or none.
* The modification can occur anywhere in the string.
* The original steps could be empty

> Points: 330

## Better solutions from other users

from: @eridev14

```typescript
export function findNaughtyStep (original: string, modified: string) {
  if (original === modified) return ''

  let pos = 0

  while (original[pos] === modified[pos]) {
    pos++
  }

  const or = original.slice(pos)
  const mo = modified.slice(pos)
  return (or.length > mo.length) ? or[0] : mo[0]
}
```

from @KrashMello

```typescript
export function findNaughtyStep (original: string, modified: string) {
  // code here
  const [longerChars, shorterChars] = modified.length > original.length
    ? [[...modified], [...original]]
    : [[...original], [...modified]]

  return longerChars.find((char, i) => char !== shorterChars[i]) ?? ''
}
```

<br>

[⬅️ Back](https://github.com/AlecANL/adventjs/tree/main/src/2023)
