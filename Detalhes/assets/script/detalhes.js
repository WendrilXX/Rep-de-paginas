document.addEventListener("DOMContentLoaded", function () {
    const movieId = 'movie_id'; // Substitua 'movie_id' pelo ID real do filme
    const apiKey = '5d3740a5fc6dfa4e862bede23e6d4fdb';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR&api_key=${apiKey}`;
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original'; // Base URL para imagens

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movieDetails = document.getElementById("movieDetails");

            // Cria um elemento img para exibir a imagem do filme
            const posterElement = document.createElement("img");
            posterElement.src = imageBaseUrl + data.poster_path; // Constroi a URL completa da imagem
            posterElement.alt = data.title + ' Poster';
            posterElement.style.maxWidth = '450px '; // Reduz o tamanho da imagem 
            posterElement.style.height = 'auto'; // Mantém a proporção da imagem



            // Adiciona o elemento img ao div "movieDetails"
            movieDetails.appendChild(posterElement);

            const titleElement = document.createElement("h2");
            titleElement.textContent = data.title;

            const overviewElement = document.createElement("p");
            overviewElement.textContent = "Sinopse: " + data.overview;

            const runtimeElement = document.createElement("p");
            runtimeElement.textContent = "Duração: " + data.runtime + " minutos";

            const voteAverageElement = document.createElement("p");
            voteAverageElement.textContent = "Avaliação: " + data.vote_average;

            // Adiciona os gêneros do filme
            const genresElement = document.createElement("p");
            genresElement.textContent = "Gêneros: " + data.genres.map(genre => genre.name).join(', ');
            
             // Adiciona a data de lançamento do filme
             const releaseDateElement = document.createElement("p");
             releaseDateElement.textContent = "Data de Lançamento: " + data.release_date;

            // Adiciona os elementos ao div "movieDetails"
            movieDetails.appendChild(titleElement);
            movieDetails.appendChild(releaseDateElement);
            movieDetails.appendChild(runtimeElement);
            movieDetails.appendChild(voteAverageElement);
            movieDetails.appendChild(genresElement);
            movieDetails.appendChild(overviewElement);
        })
        .catch(error => console.error("Erro ao buscar os dados do JSON:", error));
});
