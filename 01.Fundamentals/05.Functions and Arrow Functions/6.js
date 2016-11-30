function aggregateElements(elements) {
    elements = elements.map(Number);

    aggregate(elements, 0, (init, a) => init + a);
    aggregate(elements, 0, (init, a) => init + 1 / a);
    aggregate(elements, '', (init, a) => init + a);

    function aggregate(array, initial, func) {
        for (let i = 0; i < array.length; i++) {
            initial = func(initial, array[i]);

        }
        console.log(initial);
    }

}

aggregateElements(['1', '2', '3']);