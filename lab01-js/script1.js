function funcaoFatorial (num) 
{

    if (num == 1) 
    {
        return 1;
    }

    else {
        return num * funcaoFatorial(num - 1);
    }
}

function imprimeFatorial(num) 
{
    console.log(fatorial(num));
}

imprimeFatorial(12);