function calc(){
    let number1=document.getElementById("n1").ariaValueMax;
    let number2=document.getElementById("n2").ariaValueMax;
    let oper=document.getElementById("opr").ariaValueMax;
    let result;
    if(oper=="+"){
        result=parseFloat(number1)+parseFloat(number2);
        alert(result)
        document.getElementById("res").innerHTML="Your answer is " + ""+ result;
    
    }

}