// // 1. what is the value of y after evaluating the expression given below ?
// // let y=8
// // y+= ++y + y-- + --y;  //
// // console.log(y)
// //-----------------------------------------------------------------------------------


// // 2.give the output of the following expression :
// let a=7
// a+= a++ + ++a + --a + a--;
// console.log(a)
// //--------------------------------------------------------------------------------------


// // 3.if let y=10 then find :
// let y=10
// z=(++y * (y++ +5));
// console.log(z)
//-----------------------------------------------------------------------------------------


// 4. what are the values of x and y when the following statements are executed ?
// let a=63;
// let b=36;
// let x=(a<b) // false
// console.log(x)
// let y=(a>b)  // true
// console.log(y)

//-----------------------------------------------------------------------------------------

// 5. name the operator listed below :
// 1) < = less than
// 2) ++ = increment 
// 3) && = logical operator

//-------------------------------------------------------------------------------------

// Que 6) write a program to average of 36,45,53, using variables.
//    function main()
//    {
//     let a=36,b=45,c=53;
//     let av
//     av=(a+b+c)/3                             // average=44.6666666666666664
//     console.log("average = " +av);
//    }
//    main();
//-------------------------------------------------------------------------------------------


// // // Que. 7) write a program to iput the principal, rate and time and calculate the simple interest.
//  function main()
//  {
//     let 
//  p=100;
//  r=3;
//  t=2;
//  si="";

//     p=prompt("enter the principal");
//     r=prompt("enter the rate");
//     t=prompt("enter the duration");
//     si=(p*r*t)/100
//     document.write("simple interest="+si);
//  }
//  main();
//-----------------------------------------------------------------------------------------

// Que.8 state the difference between == and ===
// == allow implict
// === not allow implicit
//--------------------------------------------------------------------------------------

// // Que.9  convert the following if else construct into switch case
// let a = 1
// if (a == 1)
//     console.log("good");
// else if (b == 2)
//     console.log("bettter");
// else if (c == 3)
//     console.log("best");
// else
//     console.log("invalid");

//------------------------------------------------------------------------------
// que.9
// let o = 3
// switch (o) {
//     case 1:
//         console.log('good');
//         break;

//     case 2:
//         console.log('better');
//         break;

//     case 3:
//         console.log('best');
//         break;

//     default:
//         console.log('invalid')

// }
//-------------------------------------------------------------------------------------

// Que. 10 write a program to accept a mark obtained by a student in computer science and print 
// the grades accordingly:
// marks= above 90 , A
// 70 to 89 , B
// 50 to 69 , C
// // below 50 , D
// function main ()
// {
//     let C;
//     console.log("enter marks in computer science:")
//     c=(60);
//     if (c>=90)
//     console.log("grade=a");

//     else if(c>=70 && c<=90)
//     console.log("grade=b");

//     else if(c>=50 && c<=70)
//     console.log("grade=c");

//     else 
//     console.log("grade=d");

// }
// main();

//-----------------------------------------------------------------------------------
// //Que .11. 
// function main()
// {
//     let tc,d,ap;
//     console.log("enter the total cost of the items:");

//     tc=prompt('enter cost');
//     if(tc<=2000)
//     d=5-100*tc;
//     else if (tc>=2001 && tc<=5000)
//     d=25-100*tc;
//     else if(tc>=5001 && tc<=10000)
//     d=35/100*tc;
//     else 
//     d=50/100*tc;
//     ap=tc-d;
//     document.write("amount payable:"+ap)
// }
// main();
//------------------------------------------------------------------------

// // 15. write a program to input an integer and check whether it is a prime number or not
// function main() {
//     let i=1; n=3; c = 0;
//     console.log("enter an integer:");
//     n = 3;
//     for (i = 1; i <= n; i++) {
//         if (n % i == 0)
//             c++;
//     }
//     if (c == 2)
//         console.log("prime number");
//     else
//         console.log("not a prime number");
// }
// main();
// //----------------------------------------------------------------------------------

// // 16. write a program to find the sum of all 3-digit even natural numbers.
// function main()
// {
//     let i,s=0;
//     for (i=100;i<=998;i+=2)
//     {
//         s+=i;                            //sum=247050
//     }
//     console.log("sum="+s);
// }
// main();
//-------------------------------------------------------------------------


 // 18.
 function main()
 {
    let i=2;
    n=4;
    f=1;
    n=prompt('enter an integer:');
    for(i=1;i<=n;i++)
    {
        f=f*i;
    }
    document.write("factotrial:"+f)
 }









