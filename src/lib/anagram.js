export const isAnagram = (w1, w2) => {
  const w1arr = w1.split('');
  const w2arr = w2.split('');

  if (w2arr.length != w1arr.length) {
    return false;
  }

  return w1arr.map(c1 => {
    const wi = w2arr.indexOf(c1);

    if (wi > -1) {
      delete(w2arr[wi]);
      return true;
    }

    return false;
  })
  .reduce((a, b) => a && b);
}

export const findAnagram = (w, dict) => dict.filter(word => isAnagram(w, word));

export const findAndPrintAnagram = (w, dict) => {
  const anagrams = findAnagram(w, dict);

  anagrams.map(w => {
    console.log(`${word} is an anagram of ${w}`);
  });
}