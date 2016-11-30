function colorful(n) {
    let html ='<ul>\n';
    for (let i = 1; i <=  n; i++){
        let color = '';
        if (i % 2 == 0) color = 'blue';
        else color = 'green';
        html += `<li><span style='color:${color}'>${i}</span></li>\n`;
    }
    html += '</ul>';
    return html;
}

//document.body.innerHTML = colorful(['10']);