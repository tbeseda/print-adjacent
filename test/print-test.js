import test from 'node:test'
import assert from 'node:assert/strict'
import print from '../index.js'

function stringify (obj) {
  return JSON.stringify(obj, null, 2)
}

const one = stringify({
  name: 'one',
  value: 1,
})
const two = stringify({
  name: 'two',
  value: 2,
})
const three = stringify({
  name: 'three',
  value: 3,
  3: 'three',
})

test('simple', () => {
  const expected = `
  first             │  second
────────────────────┼────────────────────
  {                 │  {
    "name": "one",  │    "name": "two",
    "value": 1      │    "value": 2
  }                 │  }`

  const result = print(['first', one], ['second', two])

  assert.equal(
    result,
    expected,
  )
})

test('uneven', () => {
  const expected1 = `
  first             │  third
────────────────────┼──────────────────────
  {                 │  {
    "name": "one",  │    "3": "three",
    "value": 1      │    "name": "three",
  }                 │    "value": 3
                    │  }`

  const result1 = print(['first', one], ['third', three])
  assert.equal(
    result1,
    expected1,
  )

  const expected2 = `
  third               │  second
──────────────────────┼────────────────────
  {                   │  {
    "3": "three",     │    "name": "two",
    "name": "three",  │    "value": 2
    "value": 3        │  }
  }                   │  `

  const result2 = print(['third', three], ['second', two])
  assert.equal(
    result2,
    expected2,
  )
})

test('long labels', () => {
  const expected1 = `
  a label longer than the width of the object  │  second
───────────────────────────────────────────────┼────────────────────
  {                                            │  {
    "name": "one",                             │    "name": "two",
    "value": 1                                 │    "value": 2
  }                                            │  }`

  const result1 = print(
    ['a label longer than the width of the object', one],
    ['second', two],
  )
  assert.equal(
    result1,
    expected1,
  )

  const expected2 = `
  first             │  a label longer than the width of the object
────────────────────┼───────────────────────────────────────────────
  {                 │  {
    "name": "one",  │    "name": "two",
    "value": 1      │    "value": 2
  }                 │  }`

  const result2 = print(
    ['first', one],
    ['a label longer than the width of the object', two],
  )
  assert.equal(
    result2,
    expected2,
  )
})
