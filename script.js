const findVowels = str => {
    let count = 0;
    const vowels = ['a', 'e', 'u', 'i', 'o']
    for(let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count++
        }
    }
    return count
}

console.log(findVowels('ultramarines'))