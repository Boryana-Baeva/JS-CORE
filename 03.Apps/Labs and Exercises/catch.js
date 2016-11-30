function attachEvents() {
    let url = 'https://baas.kinvey.com/appdata/kid_SJTCbhSMl/biggestCatches';
    let appId = 'kid_SJTCbhSMl';
    let appSecret = '9231a0bf2e234131a06f70cda56a572c';
    let token = "Basic " + btoa("borry:borry");
    let angler, weight, species, location, bait, captureTime, id;

    $('.load').click(loadCollection);
    $('.add').click(addCatch);
    $('.update').click(updateCatch);
    $('.delete').click(deleteCatch);

    function loadCollection() {

        $.ajax({
            method: "GET",
            url: url,
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            success: displayCatches,
            error: displayError
        });

        function displayCatches(catches) {
            let catchesDiv = $('<div>').attr('id', 'catches');
            $('#main').append(catchesDiv);

            for (let current of catches) {
                angler = current.angler;
                weight = current.weight;
                species = current.species;
                location = current.location;
                bait = current.bait;
                captureTime = current.captureTime;
                id = current._id;

                renderCatch(id, angler, weight, species, location, bait, captureTime);
            }
        }
    }

    function addCatch() {

        let form = $('#addForm');
        let data = {
            angler: form.find('.angler').val(),
            weight: form.find('.weight').val(),
            species: form.find('.species').val(),
            location: form.find('.location').val(),
            bait: form.find('.bait').val(),
            captureTime: form.find('.captureTime').val()
        };

        $.ajax({
            method: "POST",
            url: url,
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
            success: renderCatch(id, data.angler, data.weight, data.species, data.location, data.bait, data.captureTime),
            error: displayError
        });
    }

    function updateCatch(id) {

        let input = $('.catch');
        let data = {
            angler: input.find('.angler').attr('value'),
            weight: input.find('.weight').val(),
            species: input.find('.species').val(),
            location: input.find('.location').val(),
            bait: input.find('.bait').val(),
            captureTime: input.find('.captureTime').val()
        };
        console.log(data);
        $.ajax({
            method: "PUT",
            url: url + '/' + id,
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
            success: renderCatch(id, data.angler, data.weight, data.species, data.location, data.bait, data.captureTime),
            error: displayError
        });

    }

    function deleteCatch() {

    }

    function renderCatch(id, angler, weight, species, location, bait, captureTime) {

        let div = $('<div>').addClass('catch');
        div.attr('data-id', id);

        div.append('<label>Angler</label>');
        let anglerInput = $('<input>').attr('type', 'text').attr('value', angler);
        div.append(anglerInput);

        div.append('<label>Weight</label>');
        let weightInput = $('<input>').attr('type', 'text').attr('value', weight);
        div.append(weightInput);

        div.append('<label>Species</label>');
        let speciesInput = $('<input>').attr('type', 'text').attr('value', species);
        div.append(speciesInput);

        div.append('<label>Location</label>');
        let locationInput = $('<input>').attr('type', 'text').attr('value', location);
        div.append(locationInput);

        div.append('<label>Bait</label>');
        let baitInput = $('<input>').attr('type', 'text').attr('value', bait);
        div.append(baitInput);

        div.append('<label>Capture Time</label>');
        let captureTimeInput = $('<input>').attr('type', 'text').attr('value', captureTime);
        div.append(captureTimeInput);

        let updateBtn = $('<button>Update</button>').addClass('update').on('click', () => updateCatch(id));
        let deleteBtn = $('<button>Delete</button>').addClass('delete');
        div.append(updateBtn);
        div.append(deleteBtn);
        $('#catches').append(div);
    }

    function displayError() {
        console.log('Error');
    }
}