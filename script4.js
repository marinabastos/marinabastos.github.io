function sequenciaFibonacci(num)
{
	var antes = 0;
	var agora = 1;
	var depois = 1;

	for(let i = 0; i < num; i++)
    {
		console.log(depois)
		antes = agora + depois;
		agora = depois
		depois = antes
	}
}

sequenciaFibonacci(99);