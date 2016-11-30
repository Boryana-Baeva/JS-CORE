function search() {
    let searched = $('#searchText').val();
    let count = 0;
    $('#towns li').each(function () {
        if($(this).text().indexOf(searched) != -1){
            $(this).css('font-weight', 'bold');
            count ++;
        }
        else {
            $(this).css('font-weight', '');
        }
    });
    $('#result').text(count + " matches found.");
    $('#searchText').val("");
}