var s ='';
for (var i= 1 ; i<=5; i++){
 for (var j= 1; j<=i ; j++){
   s += ' ';
 }
 for (var k=i; k<=5; k++){
   s += '*';
 }
 s += '\n';
}
console.log(s);