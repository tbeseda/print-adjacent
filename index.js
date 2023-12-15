/**
 * @param {[string, string]} col1
 * @param {[string, string]} col2
 * @returns {string}
 */
export default function sideBySide ([label1, string1], [label2, string2]) {
  const ls1 = string1.split('\n')
  const ls2 = string2.split('\n')
  const w1 = Math.max(
    label1.length,
    ls1.reduce((acc, cur) => Math.max(acc, cur.length), 0),
  )
  const w2 = Math.max(
    label2.length,
    ls2.reduce((acc, cur) => Math.max(acc, cur.length), 0),
  )

  const zipped = Array.from(
    Array(Math.max(ls1.length, ls2.length)),
    (_, i) => [ls1[i], ls2[i]],
  )

  const PAD = '  '
  const LINE = '─'
  const BAR = '│'
  const CROSS = '┼'
  const header1 = [
    PAD,
    label1,
    ' '.repeat(w1 - label1.length),
  ].join('')

  return `
${[header1, BAR, label2].join(PAD)}
${[
  LINE.repeat(header1.length + PAD.length),
  LINE.repeat(w2 + (PAD.length * 2)),
].join(CROSS)}
${zipped.map(([l1 = '', l2 = '']) => [
  PAD,
  l1,
  ' '.repeat(w1 - l1.length),
  PAD, BAR, PAD,
  l2,
].join('')).join('\n')}`
}
