function multiplicationTable([n]) {
    console.log("<table border ='1'>");
    let heading = '<tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        heading += `<th>${i}</th>`;
    }
    heading += '<tr>';
    console.log(heading);
    let content = '';
    for (let r = 1; r <= n; r++) {
        content = `<tr><th>${r}</th>`;
        for (let c = 1; c <= n; c++) {

            content += `<td>${r*c}</td>`;

        }
        content += '<tr>';
        console.log(content);
    }
    console.log('</table>');
}

multiplicationTable(['5']);