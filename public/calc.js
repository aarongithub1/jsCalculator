// 0-9 buttons

$('#0').click(function(e){
    var $display = $('#display').text();
    $('#display').text($display += '0');
});
$('#1').click(function(e){
    var $display = $('#display').text();
    $('#display').text($display += '1');
});
$('#2').click(function(e){
    var $display = $('#display').text();
    $('#display').text($display += '2');
});
$('#3').click(function(e){
    var $display = $('#display').text();
    $('#display').text($display += '3');
});
$('#4').click(function(e){
    var $display = $('#display').text();
    $('#display').text($display += '4');
});
$('#5').click(function(e){
    var $display = $('#display').text();
    $('#display').text($display += '5');
});
$('#6').click(function(e){
    var $display = $('#display').text();
    $('#display').text($display += '6');
});
$('#7').click(function(e){
    var $display = $('#display').text();
    $('#display').text($display += '7');
});
$('#8').click(function(e){
    var $display = $('#display').text();
    $('#display').text($display += '8');
});
$('#9').click(function(e){
    var $display = $('#display').text();
    $('#display').text($display += '9');
});


// add/sub/mult/div buttons
$('#add').click(function(e){
    var $currentDisplay = $('#display').text();
    $('#display').text($currentDisplay += ' + ');
});
$('#subtract').click(function(e){
    var $currentDisplay = $('#display').text();
    $('#display').text($currentDisplay += ' - ');
});
$('#multiply').click(function(e){
    var $currentDisplay = $('#display').text();
    $('#display').text($currentDisplay += ' * ');
});
$('#divide').click(function(e){
    var $currentDisplay = $('#display').text();
    $('#display').text($currentDisplay += ' / ');
});


//clear
$('#clear').click(function(e){
    console.log('clicked');
    $('#display').text('');
});


//math =
$('#equals').click(function(e){
    var $currentDisplay = $('#display').text();
    var stringNum = $('#display').text().split(" ");
    console.log(stringNum[0]);
    console.log(stringNum[1]);
    console.log(stringNum[2]);
    var numAge = Number.parseInt(stringNum);

    // if($currentDisplay'+'){
    //
    // }
    $('#display').text('');
});
