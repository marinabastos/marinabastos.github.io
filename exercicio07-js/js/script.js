exercicio1 = () => 
{
    let string = document.getElementById("q1").value;

    let result = string.split("").reverse().join("");

    document.getElementById("resultadoq1").innerHTML = result;
}


exercicio2 = () => 
{
    let string = document.getElementById("q2").value;

    let result = string.replace(/[aeiou]/gi, (char) => 
    {
        return char.bold();
    });

    document.getElementById("resultadoq2").innerHTML = result;
}


exercicio3 = (string = document.getElementById("q3").value) => 
{
    let parsedString = string.replace(/[!"#$%&'()*+,-./:;<=>?@0123456789]/g, "");
    parsedString = parsedString.toLowerCase();
    
    let words = parsedString.split(" ").filter(function(value, index, arr)
    {
        return value !== "";
    });
    
    let table = words.reduce(function(obj, b) 
    {
        obj[b] = ++obj[b] || 1;
        return obj;
    }, {});

    return table;
}


exercicio3b = () => 
{
    let string = document.getElementById("q3").value;
    table = exercicio3(string);
    console.table(table);
    document.getElementById("resultadoq3").innerHTML = "A tabela está no console.";
}


exercicio4 = () => 
{
    let string = document.getElementById("q4").value;
    var table = Object.entries(exercicio3(string));
    
    let control = 0;
    
    let result = "";
    
    for(let i = 0; i < table.length; i++)
    {
        if (table[i][1] > control) 
        {
            control = table[i][1];
            result = table[i][0];
        }
    }

    console.table(table);
    document.getElementById("resultadoq4").innerHTML = "Palavra mais recorrente: " + result + " Vezes: " + control;
}


exercicio5 = () => 
{
    let string = document.getElementById("q5-1").value;
    let search = document.getElementById("q5-2").value;
    let replace = document.getElementById("q5-3").value;

    let result = string.replace(search, replace);
    document.getElementById("resultadoq5").innerHTML = result;
}


exercicio6 = () => 
{
    let date = new Date(document.getElementById("q6").value);
    
    let now = new Date();
    
    let result = now.getTime() - date.getTime();
    
    result = Math.ceil(result / (1000 * 3600 * 24)) - 1;
    document.getElementById("resultadoq6").innerHTML = result + " dias.";
}


exercicio7 = () => 
{
    let dateString = document.getElementById("q7").value;

    let array = dateString.split("/"), day = array[0], month = array[1], year = array[2];
    
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
    let result = day + " de " + months[month-1] + " de " + year;

    document.getElementById("resultadoq7").innerHTML = result;
}


exercicio8 = () => 
{
    let date1 = new Date(document.getElementById("q8-1").value);
    
    let date2 = new Date(document.getElementById("q8-2").value);
    
    let result = date2.getTime() - date1.getTime();

    result = Math.ceil(result / (1000 * 3600 * 24)) / 7;
    document.getElementById("resultadoq8").innerHTML = result + " semanas.";
}


exercicio9 = () => 
{
    let string = document.getElementById("q9").value;

    let grade = "";
    
    if (string.match(/[a-z]+/i)) 
    {
        grade = "FRACA";
        
        if (string.match(/[0-9]+/)) 
        {
            grade = "MODERADA";
            if (string.match(/[!"#$%&'()*+,-./:;<=>?@]+/)) grade = "FORTE";
        }
    }

    document.getElementById("resultadoq9").innerHTML = grade;

    if (grade === "FORTE") 
    {
        document.getElementById("resultadoq9").style.color = "verde/green";
    }

    if (grade === "MODERADA") 
    {
        document.getElementById("resultadoq9").style.color = "laranja/orange";
    }

    else {
        document.getElementById("resultadoq9").style.color = "vermelho/red";
    }

    if(document.getElementById("resultadoq9").innerHTML === "FORTE")
    {
        document.getElementById("resultadoq9").style.color = "verde/green";
    }
}


exercicio10 = () => 
{
    let string = document.getElementById("q10").value;

    const tenis = ["t", "e", "n", "i", "s"];
    const polar = ["p", "o", "l", "a", "r"];

    let result = string.replace(/[tenispolar]/gi, (char) => 
    {
        if(tenis.includes(char)) return polar[tenis.indexOf(char)];
        if(polar.includes(char)) return tenis[polar.indexOf(char)];
    });

    document.getElementById("resultadoq10").innerHTML = result;

}