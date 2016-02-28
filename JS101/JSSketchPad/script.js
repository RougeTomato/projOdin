
$(document).ready(function () {

  //need to reverse cols and rows because of inline-block formatting
  var noc = prompt("enter number of colums")
  var nor = prompt("enter number of rows")

  //need to fix string concatenation for proper number of elements in grid
  var colTemp = '<li><div class="block"></div></li>';
  var divsC = colTemp.repeat(noc);

  var rowTemp = '<ul>' + divsC + '</ul><br>';
  var divsR =  rowTemp.repeat(nor);

  $(".container").append(function(){
    $(".container").append(divsR);
  });

  //to change colors on hover
  $(".block").hover(function() {
    $(this).removeclass();
    $(this).addClass("block-hover");
  }, function () {
    $(this).addClass("block-hover");
  });
});
