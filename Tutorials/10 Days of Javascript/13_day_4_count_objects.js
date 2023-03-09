/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */

function getCount(objects) {
  let i = 0
  objects.forEach((object) => {
    if (object.x == object.y) {
      i++
    }
  })
  return i
}

let objects = [
  {x: 1, y: 1},
  {x: 2, y: 3},
  {x: 3, y: 3},
  {x: 3, y: 4},
  {x: 4, y: 5},
]

console.log(getCount(objects));