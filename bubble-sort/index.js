// toMax 从小到达 从大到小 默认从小到大
function bubbleSort(array, toMax=true) {
  if (!array || Object.prototype.toString.call(array).slice(8, -1) !== 'Array') {
    throw new Error('请输入正确的数据格式！');
    return
  }
  console.time('冒泡排序')
  const sortArr = array.slice(0);
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const left = sortArr[i];
      const right = sortArr[j];
      if (left === right) {
        continue;
      }
      if (!toMax && right > left || toMax && left > right) {
        const temp = sortArr[i];
        sortArr[i] = right;
        sortArr[j] = temp;
      }
    }
  }
  console.timeEnd('冒泡排序')
  console.log('sortArr ', sortArr);
  return sortArr;
}

function bubbleSortOpt(array, toMax=true) {
  console.log('bubbleSortOpt ')
  if (!array || Object.prototype.toString.call(array) !== '[object Array]') {
    throw new Error('请输入正确的数据格式！');
    return
  }
  console.time('冒泡排序优化')
  const sortArr = array.slice(0);
  let i = sortArr.length - 1;
  while (i > 0) {
    let pos = 0;
    for (let j = 0; j < i; j++) {
      const l = sortArr[j];
      const r = sortArr[j+1];
      if (!toMax && r > l || (toMax && l > r)) {
        let temp = l;
        sortArr[j] = r;
        sortArr[j+1] = temp;
        pos = j;
      }
    }
    i = pos;
  }
  console.timeEnd('冒泡排序优化')
  console.log('sortArr ', sortArr);
  return sortArr;
}
bubbleSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48], false)
bubbleSortOpt([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48], true)

// export default bubbleSort;