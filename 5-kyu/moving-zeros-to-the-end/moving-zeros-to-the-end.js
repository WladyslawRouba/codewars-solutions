function moveZeros(arr) {
const withoutZeros = arr.filter(item => item !== 0)
const zerosCount = arr.length - withoutZeros.length
return withoutZeros.concat(Array(zerosCount).fill(0))
}