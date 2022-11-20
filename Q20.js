function pell(n)
{
    if (n <= 2)
        return n;
    return 2 * pell(n - 1) +
            pell(n - 2);
}
 

let n = 4;
document.write(pell(n));