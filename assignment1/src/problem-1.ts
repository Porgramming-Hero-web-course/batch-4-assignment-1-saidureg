{
  //
  const sumArray = (arr: number[]): number => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };

  console.log(sumArray([1, 2, 3, 4, 5]));

  //
}
