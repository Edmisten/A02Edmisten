function calc(){
    
    var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

    multiply(num1, num2);
}
function multiply(num1, num2){
    try{
        if(num1 == "" || num2 == "") throw "Enter a #";
        if (isNaN(num1) || isNaN(num2)) throw "Enter a #";       
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        let x = num1 * num2;
        $("#result").html("The result is " + x);
      }catch(er){
        resultMessage.innerHTML="Error "+er;       
    }
}