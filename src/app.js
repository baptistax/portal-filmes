const query = '?api_key=7cb90375dd657a7ad8b6379b939a8123&language=pt-BR';

function exibePopulares() {
    let divPopularesUm = document.getElementById('carouselMoviesUm');
    let divPopularesDois = document.getElementById('carouselMoviesDois');
    let divPopularesTres = document.getElementById('carouselMoviesTres');

    let txtPopularesUm = '';
    let txtPopularesDois = '';
    let txtPopularesTres = '';

    let dados = JSON.parse(this.responseText);

    dataPrimeiro = dados.results[0];
    dataSegundo = dados.results[1];
    dataTerceiro = dados.results[2];

    let nomePrimeiro = dataPrimeiro.original_title;
    let diaPrimeiro = dataPrimeiro.release_date;
    let overviewPrimeiro = dataPrimeiro.overview;
    let fotoPrimeiro = dataPrimeiro.poster_path;

    let nomeSegundo = dataSegundo.original_title;
    let diaSegundo = dataSegundo.release_date;
    let overviewSegundo = dataSegundo.overview;
    let fotoSegundo = dataSegundo.poster_path;

    let nomeTerceiro = dataTerceiro.original_title;
    let diaTerceiro = dataTerceiro.release_date;
    let overviewTerceiro = dataTerceiro.overview;
    let fotoTerceiro = dataTerceiro.poster_path;

    txtPopularesUm = `<div class="row"><div class="col-12"><img class="d-block w-100 imgPoster" src="https://image.tmdb.org/t/p/original${fotoPrimeiro}" alt="First slide"></div></div><div class="row"><div class="col-12 areaTxtCarousel"><p><h2 class="texto">Titulo: ${nomePrimeiro}</h2></p><p><h4 class="texto">Sinopse: ${overviewPrimeiro}</h4></p><p><h4 class="texto">Data: ${diaPrimeiro}</h4></p></div></div>`;
    divPopularesUm.innerHTML = txtPopularesUm;
    txtPopularesDois = `<div class="row"><div class="col-12"><img class="d-block w-100 imgPoster" src="https://image.tmdb.org/t/p/original${fotoSegundo}" alt="First slide"></div></div><div class="row"><div class="col-12 areaTxtCarousel"><p><h2 class="texto">Titulo: ${nomeSegundo}</h2></p><p><h4 class="texto">Sinopse: ${overviewSegundo}</h4></p><p><h4 class="texto">Data: ${diaSegundo}</h4></p></div></div>`;
    divPopularesDois.innerHTML = txtPopularesDois;
    txtPopularesTres = `<div class="row"><div class="col-12"><img class="d-block w-100 imgPoster" src="https://image.tmdb.org/t/p/original${fotoTerceiro}" alt="First slide"></div></div><div class="row"><div class="col-12 areaTxtCarousel"><p><h2 class="texto">Titulo: ${nomeTerceiro}</h2></p><p><h4 class="texto">Sinopse: ${overviewTerceiro}</h4></p><p><h4 class="texto">Data: ${diaTerceiro}</h4></p></div></div>`;
    divPopularesTres.innerHTML = txtPopularesTres;

}

function pesquisaPopulares() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibePopulares;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/popular${query}`);
    xhr.send();
}

function exibeVotados(){
    let divVotadosUm = document.getElementById('avaliadosUm');
    let divVotadosDois = document.getElementById('avaliadosDois');
    let divVotadosTres = document.getElementById('avaliadosTres');

    let txtVotadosUm = '';
    let txtVotadosDois = '';
    let txtVotadosTres = '';

    let dados = JSON.parse(this.responseText);
    console.log(dados);
    
    dataPrimeiro = dados.results[0];
    dataSegundo = dados.results[1];
    dataTerceiro = dados.results[2];

    let nomePrimeiro = dataPrimeiro.original_title;
    let mediaPrimeiro = dataPrimeiro.vote_average;
    let votoPrimeiro = dataPrimeiro.vote_count;
    let fotoPrimeiro = dataPrimeiro.poster_path;

    let nomeSegundo = dataSegundo.original_title;
    let mediaSegundo = dataSegundo.vote_average;
    let votoSegundo = dataSegundo.vote_count;
    let fotoSegundo = dataSegundo.poster_path;

    let nomeTerceiro = dataTerceiro.original_title;
    let mediaTerceiro = dataTerceiro.vote_average;
    let votoTerceiro = dataTerceiro.vote_count;
    let fotoTerceiro = dataTerceiro.poster_path;

    txtVotadosUm = `<div class="votados"><img src="https://image.tmdb.org/t/p/original${fotoPrimeiro}" height="350" width="200" class="imgsVotados"><h6 class="textoVot"><p>Nome: ${nomePrimeiro}</p><p>Média de votos: ${mediaPrimeiro}</p><p>Total de votos: ${votoPrimeiro}</p></h6></div>`;
    txtVotadosDois = `<div class="votados"><img src="https://image.tmdb.org/t/p/original${fotoSegundo}" height="350" width="200 class="imgsVotados""><h6 class="textoVot"><p>Nome: ${nomeSegundo}</p><p>Média de votos: ${mediaSegundo}</p><p>Total de votos: ${votoSegundo}</p></h6></div>`;
    txtVotadosTres = `<div class="votados"><img src="https://image.tmdb.org/t/p/original${fotoTerceiro}" height="350" width="200 class="imgsVotados""><h6 class="textoVot"><p>Nome: ${nomeTerceiro}</p><p>Média de votos: ${mediaTerceiro}</p><p>Total de votos: ${votoTerceiro}</p></h6></div>`;
    divVotadosUm.innerHTML = txtVotadosUm;
    divVotadosDois.innerHTML = txtVotadosDois;
    divVotadosTres.innerHTML = txtVotadosTres;

}

function pesquisaVotados(){
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeVotados;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/top_rated${query}`);
    xhr.send();
}

window.onload = function () {
    pesquisaPopulares();
    pesquisaVotados();
}