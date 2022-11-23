function cal(num)
{
    num()  //calling, invoke, execute
}

cal(add);  //call back function
cal(sub);

function add()
{
    a=20;
    b=30;
    c=a+b;
    console.log('addition of two number:'+c)
}

function sub()
{
    a=50;
    b=30;
    c=a-b;
    console.log('substraction of two number:'+c)
}


