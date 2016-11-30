function attachEvents() {
    const appKey = 'kid_BJXTsSi-e';
    const collection = 'students';
    const url = `https://baas.kinvey.com/appdata/${appKey}/${collection}`;
    const username = 'guest';
    const password = 'guest';

    let authHeaders = {
        "Authorization": "Basic " + btoa(`${username}:${password}`),
        "Content-Type": "application/json"
    };

    let table = $('#results');
    let id, firstName, lastName, facultyNumber, grade;

    function loadStudents() {
        table.find('td').remove();
        $.get({
            url: url,
            headers: authHeaders
        }).then(displayStudents)

    }

    function displayStudents(students) {

        students = students.sort((a, b) => (a.ID - b.ID));

        for (let student of students) {
            let row = $('<tr>');
            id = $('<td>').text(student.ID);
            firstName = $('<td>').text(student.FirstName);
            lastName = $('<td>').text(student.LastName);
            facultyNumber = $('<td>').text(student.FacultyNumber);
            grade = $('<td>').text(student.Grade);

            row.append(id)
                .append(firstName)
                .append(lastName)
                .append(facultyNumber)
                .append(grade);

            table.append(row);
        }
    }
    

    loadStudents();
    
    $('#addBtn').click(()=>{
        let idInput = $('#studentID');
        let firstNameInput = $('#firstName');
        let lastNameInput = $('#lastName');
        let facultyInput = $('#facultyNumber');
        let gradeInput = $('#grade');

        let id = Number(idInput.val());
        let grade = Number(grade.val());
        let facultyRegex = /^\d+$/g;

        if(idInput.val() != '' &&
            firstNameInput.val() != '' &&
            lastNameInput.val() != '' &&
            facultyRegex.test(facultyNumber.val()) &&
            gradeInput.val() != ''){

            let student = {
                ID: id,
                FirstName: firstName.val(),
                LastName: lastName.val(),
                FacultyNumber: facultyNumber.val(),
                Grade: grade
            };

            $.ajax({
                url: url,
                method: "POST",
                headers: authHeaders,
                data: JSON.stringify(student)
            }).then(loadStudents)
        }

        idInput.val('');
        firstNameInput.val('');
        lastNameInput.val('');
        facultyInput.val('');
        gradeInput.val('');



    });

}