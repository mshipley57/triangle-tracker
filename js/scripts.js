// front-end logic

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var length1 = parseInt($("input#length1").val());
    var length2 = parseInt($("input#length2").val());
    var length3 = parseInt($("input#length3").val());

    if (length1 === length2 && length2 === length3 && length1 === length3) {
      $('#equilateral').show();
    } else if (length1 === length2 || length1 === length3 || length2 === length3 || length3 === length1 || length1 === length2 || length2 === length3) {
      $('#isosceles').show();
    } else if (length1 != length2 && length2 != length3 && length1 != length3) {
      $('#scalene').show();
    } else if (length1 = "value=0" || length2 = "value=0" || length3 = "value=0") {
      $('#none').show();
    }


    event.preventDefault();
  });
});
