function spyMaster(input) {

    let key = input.shift();

    let text = [];

    let regex = new RegExp(key, "ig");
    for (let line of input) {
        line = line.replace(regex, key.toLowerCase());
        text.push(line);
    }

    //console.log(text);
    let pattern = new RegExp(key.toLowerCase() + " +([A-Z!%$#]+) | \. | \, | $", "g");

    for (let line of text) {

        let match = pattern.exec(line);

        while (match) {
            let message = match[1];
            while (message.includes("!")) message = message.replace("!", "1").toLowerCase();
            while (message.includes("%")) message = message.replace("%", "2").toLowerCase();
            while (message.includes("#")) message = message.replace("#", "3").toLowerCase();
            while (message.includes("$")) message = message.replace("$", "4").toLowerCase();

            console.log(message);
            let reg = new RegExp(match[1], "g");
            line = line.replace(reg, message);
            match = pattern.exec(line);

        }

    }


}

spyMaster(["specialKey",
    "In this text the specialKey HELLOWORLD! is correct, but",
    "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
    "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"]);
