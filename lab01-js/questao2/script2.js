function imprimePotencia(comeco, final) 
{
    for(let i = 1; i <= final; i++) 
    {
        console.log(Math.pow(comeco, i));
    }
}

imprimePotencia(4, 30);