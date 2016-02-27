
$(document).ready(function () {

//need to reverse cols and rows because of inline-block formatting
  var noc = 5;
  var nor = 4;

  $("#addRow").click(function() {
    nor++;
  })

  $("#minRow").click(function() {
    nor--;
  })

  $("#addCol").click(function() {
    noc++;
  })

  $("#minCol").click(function() {
    noc--;
  })


  //need to fix string concatenation for proper number of elements in grid
  var colTemp = '<li><div class="block"></div></li>';
  var divsC = colTemp.repeat(noc);

  var rowTemp = '<ul>' + divsC + '</ul><br>';
  var divsR = '"' + rowTemp.repeat(nor) + '"';

  $("#submit").click(function() {
    $(".container").append(divsC);
  })

  $("#reset").click() {
    $("#reset").function() {
      noc = 0;
      nor = 0;
    }
  }

})
