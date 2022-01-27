function numPrimo(num) 
{
    for (let div = 2; div <= Math.sqrt(num); div++) 
    {
        if(num % div == 0)
        {
        return false;
        }
    }
    return true;
}

function imprimeNumPrimos(inicio, final) 
{
    for (let i = inicio; i <= final; i++) 
    {
        if(numPrimo(i)) console.log(i);
    }
}

imprimeNumPrimos(2, 1000);