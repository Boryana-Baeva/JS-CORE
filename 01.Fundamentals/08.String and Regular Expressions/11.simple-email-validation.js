function simpleEmailValidation([email]) {
    let pattern = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g;
    if (pattern.test(email)) console.log('Valid');
    else console.log('Invalid');
}

simpleEmailValidation(['valid@email.bg']);