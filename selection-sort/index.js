// toMax 默认从小到大
function selectionSort(array, toMax=true) {
  if (!array || Object.prototype.toString.call(array).slice(8, -1) !== 'Array') {
    throw new Error('请输入正确的数据格式！');
    return
  }
  const sortArr = array.slice(0);
  for (let i = 0; i < sortArr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < sortArr.length; j++) {
      const min = sortArr[minIdx];
      const rest = sortArr[j];
      if (toMax && rest < min || (!toMax && rest > min)) {
        minIdx = j;
      }
    }
    const temp = sortArr[minIdx];
    sortArr[minIdx] = sortArr[i];
    sortArr[i] = temp;
  }
  console.log('sortArr', sortArr);
  return sortArr;
}
selectionSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])