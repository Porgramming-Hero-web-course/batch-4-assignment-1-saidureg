{
  //
  const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.replace(/[^a-zA-Z ]/g, "").split(" ");
    let count: number = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].toLowerCase() === word.toLowerCase()) {
        count++;
      }
    }
    return count;
  };

  console.log(
    countWordOccurrences(
      "TypeScript is great. I love TypeScript!",
      "typescript"
    )
  );

  //
}
