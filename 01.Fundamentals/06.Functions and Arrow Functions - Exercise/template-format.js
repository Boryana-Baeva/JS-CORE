function templateFormat(input) {

    let template = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>';
    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        template += '\n\t<question>\n\t\t' + question + '\n\t</question>';
        let answer = input[i + 1];
        template += '\n\t<answer>\n\t\t' + answer + '\n\t</answer>';
    }
    template += '\n</quiz>';

    return template;
}

templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"
]);