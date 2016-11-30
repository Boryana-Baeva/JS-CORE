function increment(selector) {
    $(selector)
        .append($('<textarea>')
            .addClass('counter')
            .val('0')
            .attr('disabled', 'disabled'))
        .append($('<button>')
            .addClass('btn')
            .attr('id', 'incrementBtn')
            .text('Increment')
            .click(incrementCounter))
        .append($('<button>')
            .addClass('btn')
            .attr('id', 'addBtn')
            .text('Add')
            .click(addListItem))
        .append($('<ul>')
            .addClass('results'));
    function incrementCounter() {
        let currentVal = $('textarea.counter').first();
        currentVal.val(Number(currentVal.val()) + 1);
    }
    function addListItem() {
        $('ul.results')
            .append($('<li>').append(
                $('textarea.counter').first().val()
            ));
    }
}