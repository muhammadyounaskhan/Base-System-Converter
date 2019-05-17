var getInput = document.getElementById('in');
getInput.addEventListener('input',getData);
//? Power function n^i

function power(n,i){
    var p =1;
   while(i>0){
       p = p*n;
       i--;
   }
   return p;
}

function reverse(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }

function getData(e){
    //! Base 2 Calculation
    var b = "";
    var input = e.target.value;
    var base2 = document.getElementById('base-2');
    
    while((input/2)>1 || (input/2)==1){
        b = b+(parseInt(input%2));
        input = parseInt(input/2);
    }
    b = b+ 1;
    base2.innerHTML = 'BASE-2:'+ reverse(b);
    //! Base 5 Calculation
    var b5="";
    var base5 = document.getElementById('base-5');
    var input5 = e.target.value;
    while((input5/5)>1 || (input5/5)==1){
        b5 = b5+(parseInt(input5%5));
        input5 = parseInt(input5/5);
    }
    b5 = b5+input5;
    base5.innerHTML = 'BASE-5:'+ reverse(b5); 
    //! Base 8 Calculation
    var b8="";
    var base8 = document.getElementById('base-8');
    var input8 = e.target.value;
    while((input8/8)>1 || (input8/8)==1){
        b8 = b8+(parseInt(input8%8));
        input8 = parseInt(input8/8);
    }
    b8 = b8+input8;
    base8.innerHTML = 'BASE-8:'+ reverse(b8); 

}
//! Base 8 to base 10 calculation
var getOctal = document.getElementById('base-8-10');
var output8 = document.getElementById('b8-10');
getOctal.addEventListener('input',base8To10);
function base8To10(e){
    var input8 = e.target.value;
    var sum8 = 0;
    var check8 = 1;
    for (var i = 0 ; i<input8.length; i++){ 
        
        if(parseInt(input8[i])>7){
            
            check8 = 0;
        }
        else{
            var n = input8.length -1;
            sum8 = sum8 +input8[i]*power(8,(n-i));
            check8 = 1;
        }
        
      } 
      if(check8 == 1){
        output8.style.color = 'white';
        output8.innerHTML ='BASE-10: '+ sum8;
      }
      else if (check8==0){
        output8.innerHTML = 'Wrong input please Enter in Base 8';
        output8.style.color = 'red';
        
      }
    
}
//! Base 5 to base 10 Calculation
var getPenta = document.getElementById('base-5-10');
var output5 = document.getElementById('b5-10');
getPenta.addEventListener('input',base5To10);
function base5To10(e){
    var input5 = e.target.value;
    var sum5 = 0;
    var check5 = 1;
    for (var i = 0 ; i<input5.length; i++){ 
        
        if(parseInt(input5[i])>4){
            
            check5 = 0;
        }
        else{
            var n = input5.length -1;
            sum5 = sum5 +input5[i]*power(5,(n-i));
            check5 = 1;
        }
        
      } 
      if(check5 == 1){
        output5.style.color = 'white';
        output5.innerHTML ='BASE-10: '+ sum5;
      }
      else if (check5==0){
        output5.innerHTML = 'Wrong input please Enter in Base 5';
        output5.style.color = 'red';
        
      }
    
    
}
//! Base 2 to base 10 Calculation
var getBinary = document.getElementById('base-2-10');
var output2 = document.getElementById('b2-10');
getBinary.addEventListener('input',binaryTo10);
function binaryTo10(e){
    var input2 = e.target.value;
    output2.innerHTML = input2;
    var sum2 = 0;
    var check2 = 1;
    for (var i = 0 ; i<input2.length; i++){ 
        
        if(parseInt(input2[i])>1){

            check2 = 0;
            console.log(check2);
        }
        else{
            var n = input2.length -1;
            sum2 = sum2 +input2[i]*power(2,(n-i));
            check2 = 1;
        }
        
      } 
      if(check2 == 1){
        output2.style.color = 'white';
        output2.innerHTML ='BASE-10: '+ sum2;
        console.log(check2);
      }
      else if(check2 ==0){
        output2.innerHTML = 'Wrong input please Enter in binary';
        output2.style.color = 'red';
        
      }
      
}