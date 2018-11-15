function  makeGrid() {
    // grid size
    let gridHeight = $('#input_height').val();
    let gridWidth = $('#input_width').val();

    //table
    let table = $('#pixel-table');

    //clear
    table.children().remove();

    // add grid
    if (gridHeight < 1 || gridWidth < 1) {
        alert('Properties must be more then 0')
    } else {
    for ( let i = 0; i <gridHeight; i++) {
        table.append('<tr></tr>');
        for(let j = 0; j <gridWidth; j++) {
            table.children().last().append('<td></td>');
        }
    }}
}
    // click on the table
    $('#pixel-table').on('click', 'td', function () {
        let color = $('#color_picker').val();
        $(this).css('background-color', color);
    });
    // Remove color with double click
        $('table').on('dblclick', 'td', function() {
        $(this).css('background-color', '');
    });

    //clear all button
    $("#clear_all").click(function() {
        $('table,td').css('background-color', '');
    });
    //color all btn
    $("#color_all").click(function() {
        let color = $('#color_picker').val();
        $('table,td').css('background-color', color);
    });


//call function
$("input[type='submit']").click( function(e) {
    e.preventDefault();
    makeGrid();
});
