function matchAllWords([text]) {
    let pattern = /\w+/g;
    let matches = text.match(pattern).join('|');

    console.log(matches);
}

matchAllWords(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']);
matchAllWords(['Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !']);