function usernames(emails) {
    let letter = '';
    let list = [];
    for( let email of emails){
        let result = email.split('@');
        let username = result[0] + '.';
        let domain = result[1];
        let domainParts = domain.split('.');

        for (let part of domainParts){
            letter = part.substr(0,1);
            username += letter;
        }
        list.push(username);

    }
    return list.join(', ');
}

console.log(usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));