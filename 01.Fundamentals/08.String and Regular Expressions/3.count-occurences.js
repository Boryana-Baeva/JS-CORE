function countOccurences([word, str]) {

    /**
     *
     * @type {Array|*}
     *
     * let arr = str.split(" ");
     for (let i = 0; i < arr.length ; i++) {
        if (arr[i].includes(word)) count++;
    }
     */

    let count = 0;
    let index = str.indexOf(word);

    while (index > -1){
        count ++;
        index = str.indexOf(word,  index + 1);

    }
    return count;
}

console.log(countOccurences(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']));