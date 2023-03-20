/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
  // Write your code here
  let [maxTopic, maxTeam, count] = [0, 0, 0]
  for (let i = 0; i < topic.length - 1; i++)
    for (let j = i + 1; j < topic.length; j++) {
      for (let k = 0; k < topic[0].length; k++) {
        if (topic[i][k] === '1' || topic[j][k] === '1') count++
      }
      if (maxTopic === count) maxTeam++
      else if (maxTopic < count) {
        maxTopic = count
        maxTeam = 1
      }
      count = 0
    }
  return [maxTopic, maxTeam]
}

let topic = ['10101', '11100', '11010', '00101']

console.log(acmTeam(topic))
