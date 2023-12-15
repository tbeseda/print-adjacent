## Usage

Like in a test...

```js
import assert from 'node:assert/strict'
import test from 'node:test'
import printAdjacent from 'print-adjacent'

test('Make sure one object is the same as another', () => {
  assert.deepStrictEqual(
    object1,
    object2,
    printAdjacent(
      ['EXPECTED', JSON.stringify(object2, null, 2)],
      ['ACTUAL', JSON.stringify(object1, null, 2)],
    ),
  )
})
```

## Output

```
✖ Make sure one object is the same as another (0.606542ms)
  AssertionError [ERR_ASSERTION]: 
    EXPECTED                  │  ACTUAL
  ────────────────────────────┼────────────────────────────
    {                         │  {
      "type": "pair",         │    "type": "pair",
      "value": [              │    "value": [
        {                     │      {
          "type": null,       │        "type": null,
          "value": "foo"      │        "value": "foo"
        },                    │      },
        {                     │      {
          "type": "pair",     │        "type": "pair",
          "value": [          │        "value": [
            {                 │          {
              "type": null,   │            "type": null,
              "value": "bar"  │            "value": "bar"
            },                │          },
            {                 │          {
              "type": null,   │            "type": null,
              "value": "baz"  │            "value": "baz"
            }                 │          }
          ],                  │        ],
          "bar": "baz"        │        "bar": "baz"
        }                     │      }
      ],                      │    ],
      "foo": "bar:baz"        │    "foo": [
    }                         │      {
                              │        "type": null,
                              │        "value": "bar"
                              │      },
                              │      {
                              │        "type": null,
                              │        "value": "baz"
                              │      }
                              │    ]
                              │  }
```
