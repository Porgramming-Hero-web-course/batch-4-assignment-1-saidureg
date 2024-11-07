{
  //
  const removeDuplicates = (arr: number[]): number[] => {
    const newArray: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (newArray.indexOf(arr[i]) === -1) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  };

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

  //
}
