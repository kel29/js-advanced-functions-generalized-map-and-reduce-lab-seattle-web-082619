function map (arr, cb) {
  const newArr = [];
  for (const item of arr) {
    newArr.push(cb(item));
  }
  return newArr;
}

