{
  //
  const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.split(" ");
    let count: number = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].toLowerCase() === word.toLowerCase()) {
        count++;
      }
    }
    return count;
  };

  console.log(countWordOccurrences("I love TypeScript", "typescript"));

  //
}
