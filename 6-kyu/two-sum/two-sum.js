function twoSum(numbers, target) {
  const map = {};
​
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const needed = target - current;
​
    if (map[needed] !== undefined) {
      return [map[needed], i];
    }
​
    map[current] = i;
  }
}