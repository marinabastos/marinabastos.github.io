function somaNumPares(num) 
{
    let somapar = 0;

    for(let i = 1; i <= num; i++) 
    {
        if(i % 2 == 0) 
        {
            somapar = somapar + i;
        }
    }

    console.log(somapar);
}

somaNumPares(1000);