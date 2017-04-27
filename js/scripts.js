function getResult(q1, q2, q3, q4) {
  return q1+q2+q3+q4;
  }

$(function () {
  $("#form-info").submit(function(event) {
    var result = getResult(
      parseInt($("#q1").val()),
      parseInt($("#q2").val()),
      parseInt($("#q3").val()),
      parseInt($("#q4").val()));
      console.log(result);
    switch (result)  {
      case 5:{
        alert("You are totally liberal");
        break;
      }
      case (6,7): {
        alert("You are a moderate");
        break;
      }
      case 8:{
        alert("You are a conservative");
        break;
      }
      default:

    }
    event.preventDefault();
  });
});
