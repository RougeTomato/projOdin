
$(document).ready(function () {

  var nor = prompt("input number of rows");
    //NaN validation
    /*if (nor == NaN) {
      alert("NaN");
      nor = prompt("input a number!")
    }*/

  var noc = prompt("input number of columns");

  var divsR = '<li><div class="block></div></li>"';
  var rows = divsR.repeat(nor);

  var divsC = '<ul>' + rows + '</ul>';
  var columns = divsC.repeat(noc);

  $(".container").append(noc)







})
