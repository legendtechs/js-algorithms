function insertSort(array, toMax) {
  if (!array || Object.prototype.toString.call(array).slice(8, -1) !== 'Array') {
    throw new Error('请输入正确的数据格式！');
    return
  }
  const sortArr = array.slice(0);
  const len = sortArr.length;
  for (let i = 1; i < len; i++) {
    const tempVal = sortArr[i];
    let prevIdx = i - 1;
    while(prevIdx >= 0 && sortArr[prevIdx] > tempVal) {
      sortArr[prevIdx + 1] = sortArr[prevIdx];
      prevIdx--;
    }
    sortArr[prevIdx + 1] = tempVal;
  }
  console.log('insertSort ', sortArr);
  return sortArr;
}

insertSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])