
$(document).ready(function () {

  //need to reverse cols and rows because of inline-block formatting
  var noc = 5;
  var nor = 4;

  $("#addRow").click(function() {
    nor++;
    $("#nor").html(nor);
  })

  $("#minRow").click(function() {
    nor--;
    $("#nor").html(nor);
  })

  $("#addCol").click(function() {
    noc++;
    $("#noc").html(noc);
  })

  $("#minCol").click(function() {
    noc--;
    $("#noc").html(noc);
  })


  //need to fix string concatenation for proper number of elements in grid
  var colTemp = '<li><div class="block"></div></li>';
  var divsC = colTemp.repeat(noc);

  var rowTemp = '<ul>' + divsC + '</ul><br>';
  var divsR = '"' + rowTemp.repeat(nor) + '"';

  $("#submit").click(function() {
    $(".container").empty();
    $(".container").append(divsC);
  })

  $("#reset").click(function () {
    $(".container").empty()
  })

})
