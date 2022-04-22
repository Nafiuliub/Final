//console.log("more js practice"); 
//console.log("this is the second line");

function add(){
    var num1 = document.getElementById("n1").value ;
    var number1 = parseInt(num1);
    var num2 = document.getElementById("n2").value ; 
    var number2 = parseInt(num2);
    
    var result = number1 + number2 ;
    
    console.log(result);
    var msg = "the sum of two numbers are:" + result;
    document.getElementById("result-area").innerText= msg ; 

}
function changeText (){
    var name = document.getElementById('name-input').value ;
    var age = document.getElementById('age-input').value ;

    document.getElementById('para-1').innerText = name;
    document.getElementById('para-2').innerText= age;

    greet(name, age);
}

function greet (name, age ){
  //var msg = "Welcome to our offline classes " + name  ; 
  //document.getElementById('para-3').innerText = msg; 

  document.getElementById('para-3').innerHTML = `<b>Nice to know you, ${name} <br>  
                                                 you entered age:<u> ${age} </u> </b>`; 
}

function multiply (){
    var num1 = 10;
    var num2 = 15;
    var Mresult = num1*num2;
    console.log(Mresult);

    
    var msg = "the sum of two numbers are:" + Mresult;
    document.getElementById("Mresult-area").innerText= msg ;

}




function add2 (){
    var x = 20;
    var y = 40;
    var Sresult = x+y;
    console.log(Sresult);

    var msg = "the sum of two numbers are:" + Sresult;
    document.getElementById("Sresult-area").innerText= msg ;
}

