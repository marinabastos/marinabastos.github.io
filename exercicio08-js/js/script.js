$(() => {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'https://rafaelescalfoni.github.io/desenv_web/filmes.json',
        data: { get_param: 'value' }, 
        success: (data) => {
            renderCards(data, template);
        }
    });

    var template = `
    <div class="card-container">
    <div class="card-envelope">
        <div class="card-front">
            <img src="{{figura}}">
        </div>
        <div class="card-back">
            <div class="movie-info-top">
                <h1>{{titulo}}</h1>
                <h3>{{nota}}</h3>
                <h4>{{generos}}</h4>
                <p>Elenco: {{elenco}}</p>
            </div>
            <div class="movie-info-mid">
                <p>{{resumo}}</p>
            </div>
            <div class="movie-info-bottom">
                <div class="movie-similar">
                    <h2>Títulos Similares</h2>
                    <div class="similar-imgs">
                        {{#imgsTitulosSemelhantes}}
                        <img src="{{img}}">
                        {{/imgsTitulosSemelhantes}}
                    </div>
                </div>
                {{{classificacao}}}
            </div>
        </div>
    </div>
</div>
    `

    function renderCards(data, template) 
    {
        console.log(data);
        
        let shadow = `text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;">`;

        data.forEach(obj => {
            
            switch(obj.classificacao){

                case 0: obj.classificacao = `<h3 style="color: green; `+ shadow + `Livre</h3>` 
                break;
                case 10: obj.classificacao = `<h3 style="color: blue; ` + shadow + obj.classificacao + `</h3>`
                break;
                case 12: obj.classificacao = `<h3 style="color: yellow; ` + shadow + obj.classificacao + `</h3>`
                break;
                case 14: obj.classificacao = `<h3 style="color: orange; ` + shadow + obj.classificacao + `</h3>`
                break;
                case 16: obj.classificacao = `<h3 style="color: red; ` + shadow + obj.classificacao + `</h3>`
                break;
                case 18: obj.classificacao = `<h3 style="color: black; ` + shadow + obj.classificacao + `</h3>`
                break;
            }

            let control = 0;

            obj.opinioes.forEach(comment => 
            {
                control += comment.rating;
            })

            obj.nota = control / obj.opinioes.length;

            obj.imgsTitulosSemelhantes = [];

            let imgs = {};

            for(let i = 0; i < obj.titulosSemelhantes.length; i++)
            {
                imgs = {
                    img: data[obj.titulosSemelhantes[i] - 1].figura
                };

                obj.imgsTitulosSemelhantes.push(imgs);

                console.log(obj.titulo);
                console.log(obj.titulosSemelhantes[i]);
                console.log(data[i]);
            }

        })

        for(let i = 0; i <= data.length; i++)
        {
        $('#catalog').append(Mustache.render(template, data[i]));
        }
}

});