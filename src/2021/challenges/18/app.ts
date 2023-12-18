type FileMapped = Record<string, number>

export function fixFiles (files: Array<string>) {
  const fileMapped: FileMapped = {}
  const filesOrdered = []

  for (const file of files) {
    if (!fileMapped[file]) {
      fileMapped[file] = 1
      filesOrdered.push(file)
    } else {
      filesOrdered.push(`${file}(${fileMapped[file]})`)
      fileMapped[file] += 1
    }
  }

  return filesOrdered
}
