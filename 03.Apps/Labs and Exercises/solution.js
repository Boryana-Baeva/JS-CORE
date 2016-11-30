function attachEvents() {
    $('#submit').click(send);
    $('#refresh').click(refresh);

    let url = 'https://messenger-borry.firebaseio.com/.json';

    function send() {
        let message = {
            author: $('#author').val(),
            content:$('#content').val(),
            timestamp: Date.now()
        };
        $('#content').val('');
        $.post(url, JSON.stringify(message))
            .then(refresh);
    }

    function refresh() {

        $.get(url)
            .then((result) => {
                $('#messages').empty();
                let keys = Object.keys(result).sort((m1, m2) => result[m1].timestamp - result[m2].timestamp);
                for (let msg of keys) {
                    $('#messages').append(`${result[msg].author}: ${result[msg].content}\n`);
                }
            })

    }
}

