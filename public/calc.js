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

//decimal
$('#decimal').click(function(e){
    var $currentDisplay = $('#display').text();
    $('#display').text($currentDisplay += '.');
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
    console.log('cleared');
    $('#display').text('');
});


// '=' button
$('#equals').click(function(e){
    $doMath();

});

//keyUp for backspace key
$(document).keyup(function(ku){
    if(ku.keyCode === 8) {
        var $display = $('#display').text();
        var strArr = $display.split('');

        strArr.pop();
        console.log(strArr);

        var newString = strArr.toString().split(',').join('');
        // console.log(newString);
        $('#display').text(newString);

    }
});

//error checking NaN and operator signs
$(document).keypress(function(kp){
    // console.log(String.fromCharCode(kp.which));
    var $display = $('#display').text();
    var key = String.fromCharCode(kp.which);

    //check if NaN
    if(isNaN(key) && key !== '+' && key !== '-'
                  && key !== '*' && key !== '/'
                  && key !== '=' && key !== '.'
                  && key !== 'C' && key !== 'c'){
        alert('please enter a number');

    }
    else {
        //if operator sign add spaces, else keep together
        if(key === '+' || key === '-' || key === '*' || key === '/' || key === '='){
            $('#display').text($display += ' ' + String.fromCharCode(kp.which) + ' ');
        }
        else {
            $('#display').text($display += String.fromCharCode(kp.which));

        }
        if(key === '='){
            $doMath();
        }
        if(key === 'c' || key === 'C'){
            $('#display').text('');
        }

    }

});

var $doMath  = function(){
    var $currentDisplay = $('#display').text();
    var stringNum = $('#display').text().split(" ");
    console.log(stringNum[0]);
    console.log(stringNum[1]);
    console.log(stringNum[2]);

    var num1 = Number.parseFloat(stringNum[0]);
    var num2 = Number.parseFloat(stringNum[2]);
    switch (stringNum[1]) {
        case '+': total = num1 + num2;
            break;
        case '-': total = num1 - num2;
            break;
        case '*': total = num1 * num2;
            break;
        case '/': total = num1 / num2;
            break;
    }
    // var total = num1 + num2;
    console.log(total);
    $('#display').text(total);
}
