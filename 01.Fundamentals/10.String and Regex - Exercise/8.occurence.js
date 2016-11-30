function occurencesOfWord([sentence, word]) {
    word = "\\b" + word + "\\b";
    let regex = new RegExp(word ,'ig');
    let matches = sentence.match(regex);
    if (matches)console.log(matches.length);
    else (console.log('0'));

}

occurencesOfWord(['re waterfall was so high, that  child couldn’t see its peak.','the']);