class TitleBar {
    constructor(title) {
        this.title = title;
        this.menu = [];
        this.menuHTML = {};
    }

    addLink(href, name) {
        this.menu.push($(`<a class="menu-link" href="${href}">${name}</a>`));
    }

    appendTo(selector) {
        $(selector).append(this.generate());

    }

    generate() {
        let html = $(`<header class="header">
    <div class="header-row">
        <a class="button">&#9776;</a>
        <span class="title">${this.title}</span>
    </div>
    <div class="drawer">
        <nav class="menu">
        </nav>
    </div>
</header>`);
        for(let item of this.menu){
            this.menuHTML = html.find('.menu');
            this.menuHTML(item);
        }

        let button = html.find('.button');
        button.click(function () {
            let menu = this.menuHTML.parent();
            if(menu.css('display') == 'none'){
                menu.css('display', 'block');
            }
            else {
                menu.css('display', 'none');
            }
        });
        return html;
    }
}
