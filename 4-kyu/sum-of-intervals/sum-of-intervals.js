function sumIntervals(intervals) {
  if(intervals.length === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  
  result = 0;
  let start = intervals[0][0];
  let end = intervals[0][1];
  for(let i = 1; i < intervals.length; i++){
    let currentStart = intervals[i][0];
    let currentEnd = intervals[i][1];
    if(currentStart <= end){
      end = Math.max(end, currentEnd)
    } else{
      result += end - start;
      start = currentStart;
      end = currentEnd;
    }
  }
    result += end - start;
  return result
}