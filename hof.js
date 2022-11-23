// Higher Order Function

function fun(){
    return function(){console.log('I Am Namrata')};
}

//fun()();
let result=fun();
result();