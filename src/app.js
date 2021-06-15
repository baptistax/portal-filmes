const query = '?api_key=7cb90375dd657a7ad8b6379b939a8123&language=pt-BR';
const url = 'https://www.google.com.br/search?q=';

function exibePopulares() {
    let divPopularesUm = document.getElementById('carouselMoviesUm');
    let divPopularesDois = document.getElementById('carouselMoviesDois');
    let divPopularesTres = document.getElementById('carouselMoviesTres');

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

    txtPopularesUm = `<div class="row"><div class="col-12"><img class="d-block w-100 imgPoster" src="https://image.tmdb.org/t/p/original${fotoPrimeiro}" alt="First slide"></div></div><div class="row"><div class="col-12 areaTxtCarousel"><p><h2 class="texto">Titulo: <a href="${url}${nomePrimeiro}" target="_blank">${nomePrimeiro}</a></h2></p><p><h4 class="texto">Sinopse: ${overviewPrimeiro}</h4></p><p><h4 class="texto">Data: ${diaPrimeiro}</h4></p></div></div>`;
    divPopularesUm.innerHTML = txtPopularesUm;
    txtPopularesDois = `<div class="row"><div class="col-12"><img class="d-block w-100 imgPoster" src="https://image.tmdb.org/t/p/original${fotoSegundo}" alt="First slide"></div></div><div class="row"><div class="col-12 areaTxtCarousel"><p><h2 class="texto">Titulo: <a href="${url}${nomeSegundo}" target="_blank">${nomeSegundo}</a></h2></p><p><h4 class="texto">Sinopse: ${overviewSegundo}</h4></p><p><h4 class="texto">Data: ${diaSegundo}</h4></p></div></div>`;
    divPopularesDois.innerHTML = txtPopularesDois;
    txtPopularesTres = `<div class="row"><div class="col-12"><img class="d-block w-100 imgPoster" src="https://image.tmdb.org/t/p/original${fotoTerceiro}" alt="First slide"></div></div><div class="row"><div class="col-12 areaTxtCarousel"><p><h2 class="texto">Titulo: <a href="${url}${nomeTerceiro}" target="_blank">${nomeTerceiro}</a></h2></p><p><h4 class="texto">Sinopse: ${overviewTerceiro}</h4></p><p><h4 class="texto">Data: ${diaTerceiro}</h4></p></div></div>`;
    divPopularesTres.innerHTML = txtPopularesTres;

}

function pesquisaPopulares() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibePopulares;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/popular${query}`);
    xhr.send();
}

function exibeVotados() {

    let divVotadosUm = document.getElementById('avaliadosUm');
    let divVotadosDois = document.getElementById('avaliadosDois');
    let divVotadosTres = document.getElementById('avaliadosTres');

    let dados = JSON.parse(this.responseText);

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

    txtVotadosUm = `<div class="votados"><img src="https://image.tmdb.org/t/p/original${fotoPrimeiro}" height="350" width="200" class="imgsVotados"><h6 class="textoVot"><p>Nome: <a href="${url}${nomePrimeiro}" target="_blank">${nomePrimeiro}</a></p><p>Média de votos: ${mediaPrimeiro}</p><p>Total de votos: ${votoPrimeiro}</p></h6></div>`;
    txtVotadosDois = `<div class="votados"><img src="https://image.tmdb.org/t/p/original${fotoSegundo}" height="350" width="200 class="imgsVotados"><h6 class="textoVot"><p>Nome: <a href="${url}${nomeSegundo}" target="_blank">${nomeSegundo}</a></p><p>Média de votos: ${mediaSegundo}</p><p>Total de votos: ${votoSegundo}</p></h6></div>`;
    txtVotadosTres = `<div class="votados"><img src="https://image.tmdb.org/t/p/original${fotoTerceiro}" height="350" width="200 class="imgsVotados"><h6 class="textoVot"><p>Nome: <a href="${url}${nomeTerceiro}" target="_blank">${nomeTerceiro}</a></p><p>Média de votos: ${mediaTerceiro}</p><p>Total de votos: ${votoTerceiro}</p></h6></div>`;
    divVotadosUm.innerHTML = txtVotadosUm;
    divVotadosDois.innerHTML = txtVotadosDois;
    divVotadosTres.innerHTML = txtVotadosTres;
}

function pesquisaVotados() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeVotados;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/top_rated${query}`);
    xhr.send();
}

function exibeTv() {
    let textoTvUm = document.getElementById('txtTvUm');
    let textoTvDois = document.getElementById('txtTvDois');
    let textoTvTres = document.getElementById('txtTvTres');
    let imgUm = document.getElementById('imgTvUm');
    let imgDois = document.getElementById('imgTvDois');
    let imgTres = document.getElementById('imgTvTres');

    let dados = JSON.parse(this.responseText);

    dataPrimeiro = dados.results[0];
    dataSegundo = dados.results[1];
    dataTerceiro = dados.results[2];

    let nomePrimeiro = dataPrimeiro.original_name;
    let resumoPrimeiro = dataPrimeiro.overview;
    let arPrimeiro = dataPrimeiro.first_air_date;
    let fotoPrimeiro = dataPrimeiro.poster_path;

    let nomeSegundo = dataSegundo.original_name;
    let resumoSegundo = dataSegundo.overview;
    let arSegundo = dataSegundo.first_air_date;
    let fotoSegundo = dataSegundo.poster_path;

    let nomeTerceiro = dataTerceiro.original_name;
    let resumoTerceiro = dataTerceiro.overview;
    let arTerceiro = dataTerceiro.first_air_date;
    let fotoTerceiro = dataTerceiro.poster_path;

    textoTvUm.innerHTML = `<div class="txtTv"><h5><p><b>Nome:</b> ${nomePrimeiro}</p><p><b>Sinopse:</b> ${resumoPrimeiro}</p><p><b>Lançamento:</b> ${arPrimeiro}</p></div></h5>`;
    imgUm.innerHTML = `<img src="https://image.tmdb.org/t/p/original${fotoPrimeiro}" height="450" width="250 class="imgsVotados">`;
    textoTvDois.innerHTML = `<div class="txtTv"><h5><p><b>Nome:</b> ${nomeSegundo}</p><p><b>Sinopse:</b> ${resumoSegundo}</p><p><b>Lançamento:</b> ${arSegundo}</p></div></h5>`;
    imgDois.innerHTML = `<img src="https://image.tmdb.org/t/p/original${fotoSegundo}" height="450" width="250 class="imgsVotados">`;
    textoTvTres.innerHTML = `<div class="txtTv"><h5><p><b>Nome:</b> ${nomeTerceiro}</p><p><b>Sinopse:</b> ${resumoTerceiro}</p><p><b>Lançamento:</b> ${arTerceiro}</p></div></h5>`;
    imgTres.innerHTML = `<img src="https://image.tmdb.org/t/p/original${fotoTerceiro}" height="450" width="250 class="imgsVotados">`;
}

function pesquisaTv() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeTv;
    xhr.open('GET', `https://api.themoviedb.org/3/tv/popular${query}`);
    xhr.send();
}

function executaPesquisa(){
    let query = document.getElementById('inputSearch').value;
    sessionStorage.setItem('query', query);
    window.open("pesquisa.html");
}

window.onload = function () {
    pesquisaPopulares();
    pesquisaVotados();
    pesquisaTv();
    document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);
}