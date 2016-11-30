function htmlScore(input) {
    let scores = JSON.parse(input);
    let html = '<table>\n<tr><th>name</th><th>score</th></tr>\n';
    for (let score of scores) {
        html += ' <tr>';
        html += `<td>${htmlEscape(score.name)}</td>`;
        html += `<td>${htmlEscape(score.score)}</td>`;
        html += '</tr>\n';
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

htmlScore('[{"name": "Pesho", "score": 479}, {"name": "Gosho", "score": 205}]');