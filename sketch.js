function setup() {
  createCanvas(800, 800);
  // for(var i =1 ; i<=10 ; i = i+1 ){
  //   console.log("Aryan Jakhar😉")
  // }

  /* for(var i = 1 ; i<=20 ; i = i+1){
  if(i%2==0){
    console.log(i)
  }

}

 */
  /* 
a = 234444492849
console.log(a%10)
 */

  //arey = [10,-5,5589,-92]
  //for(var i=0 ; i<=3 ; i = i+1){
  //console.log(arey[i])
  //}

  /* for(var i=0 ; i<=3 ; i = i+1)
{
if(arey[i]%2==0){
  console.log(arey[i])
} 
} */
  /* 
for(var i = 0 ; i<=3 ; i = i+1){
  console.log(arey[i]%10)
 */
  /* a = 0
  for(var i=0 ; i<=3 ; i=i+1){
    
    a=a+arey[i]
    }
    console.log(a)  */

 /*  var a = [10, 20, 30, 40, 15, 25, 35, 45, 100, 87];
  /* b=[]
c=[]  */

  /* for( var i = 0 ; i<=3 ; i = i+1){
 
 c.push(a[i]+b[i])
 console.log(c[i])
} */
//   var ab = 0;
//  // var b = 0;
//   for (var i = 0; i <= 9; i = i + 1) {
//     if (i % 2 == 1) {
//       if(a[i]%2 == 0){
//       ab = ab + a[i];
//     } }


//factorial

// var a = [10,20,30,40,50]
// // var b = [60,70,80,90,100]
// var c = 1

//var j = 0
// var d = 0
// var e = 0
// for(i = 0 ; i<=9 ; i = i+1){

// if(i%2==0){
//   c.push(a[d])
//   d = d+1
// }

// if(i%2==1){
//   c.push(b[e])
//   e = e+1
// }

// }

// console.log(c)

// for(i = 0 ; i<=4 ; i = i+1){
//   if(a[i] == c){
//    j = 1
//    break
//   }
// }

//   if(j == 1){
//     console.log("HOGYA")
//   }

//   else{
//     console.log("BHAD ME JAAO")
//   }


// for(var i = c ; i<4 ; i = i+1){

// a[i] = a[i+1]

// }

// console.log(a)



// for(var i = 1 ; i<=10 ; i = i+1){
// for(var a = i ; a>=1 ; a=a-1){

// c = c*a

// }

// console.log(c)
// c = 1
// }


// for(var i = 1 ; i<=4 ; i = i+1){
// for(var b = a[i] ; a>1 ; a = a-1){
//   c = c*a
// }
// console.log(c)
// }

tesatistring()
//factorial()
    
  } 



  //console.log(ab);
 // console.log(b);
//  11. Accept 10 numbers into an array. Then accept a position number and delete the number present in that position.

/* 
for(var i = 2 ; i<=20 ; i = i+2){
  console.log(i)
} */




function draw() {
  background("black");
  
}

async function factorial() {
  fact = 5
var p = 1
  for(var i = 1 ; i<=fact ; i = i+1 ){

p = p*i 

}       
console.log(p)
}

async function api(){
 var a = await fetch("http://worldclockapi.com/api/json/pst/now")
 var data = await a.json()
var n = data.currentDateTime
var hr = n.slice(11,12+1)
 console.log(hr)
 if(hr>=18){
console.log("BACHE ZYADA DER NHI JAAGTE SO JAAO")
 }
else if(hr<18){
console.log("DIN KA SAMAY")
 }
}

function tesatistring(){
var a = "My name iz Aryan Jakhar"
var d = ""
// console.log(a.charAt(11))
// console.log(a.length)
for(i=0 ; i<=22 ; i = i+1){
 b = a.charAt(i)
 c = b.toUpperCase()
 if(c==b){
d = d+b.toLowerCase()  
 }
 else{
   d = d+b.toUpperCase()
 }
}
console.log(a.toUpperCase())
console.log(a.trim())
console.log(d)
var ab = a .slice(11,16)
console.log(ab)
}
