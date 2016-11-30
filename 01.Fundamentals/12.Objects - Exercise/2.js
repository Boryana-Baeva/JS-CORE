function jsonsHtml(employees) {
    let html = '<table>\n';
    for (let employee of employees){
        let empData = JSON.parse(employee);
        html += '\t<tr>\n';
        html += `\t\t<td>${htmlEscape(empData.name)}</td>\n`;
        html += `\t\t<td>${htmlEscape(empData.position)}</td>\n`;
        html += `\t\t<td>${htmlEscape(empData.salary)}</td>\n`;
        html += '\t<tr>\n';
    }

    html += '</table>';
    console.log(html);

    function htmlEscape(text) {
        text = new String(text);
        let map = {'"' : '&quot;', '&' : '&amp;',
            "'" : '&#39;','<': '&lt;', '>' :'&gt;'};
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

jsonsHtml(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);