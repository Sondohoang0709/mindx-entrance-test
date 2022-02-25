function findOppositenumber(n, inputNumber){
 
 if ((0 <= inputNumber <= n - 1) && (inputNumber <=5) && (n%2 ==0 )   )
 return (inputNumber + (n/2));
   
 if ((0<=inputNumber <= n-1) && (inputNumber > 5 ) && (n%2 ==0 )   )  
   return (inputNumber + (n/2))%n
  else 
   return 0
}
document.getElementById("demo").innerHTML = findOppositenumber( 10 ,6)

