function JSONToHTMLTable([json]) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += "  <tr>";
    for (let key of Object.keys(arr[0]))
        html += `<th>${htmlEscape(key)}</th>`;
    html += "</tr>\n";
    for (let obj of arr) {
        html += ' <tr>';
        html += `<td>${htmlEscape(obj[arr[0]])}</td>`;
        html += `<td>${htmlEscape(score.score)}</td>`;
        html += '</tr>\n';

    }
    return html + "</table>";
    function htmlEscape(text) {
        text = new String(text);
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

}
