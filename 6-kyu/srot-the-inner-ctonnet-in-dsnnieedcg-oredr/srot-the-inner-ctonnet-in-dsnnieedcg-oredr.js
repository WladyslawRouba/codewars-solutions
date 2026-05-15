function sortTheInnerContent(words)
{
  return words.split(' ').map(word => {
    if(word.length <= 2) return word
    let first = word[0];
    let last = word[word.length -1];
    let middle = word.slice(1, -1);
    const sortedMiddle = middle.split('').sort().reverse().join('')
    return first + sortedMiddle + last
  }).join(' ')
}