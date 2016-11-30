function imperialUnitsConversion([inches]) {
    let feet = parseInt(Number(inches) / 12);
    let inch = Math.ceil((Number(inches) / 12 - feet) * 12);
    console.log(`${feet}'-${inch}"`);
}

imperialUnitsConversion([55]);