$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        e.preventDefault();

        let searchText = $('#searchText').val();
        getMovies(searchText);

    })
});


async function getMovies(searchText) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=2aa54ec1`);
        
        const data = await response.json();
        let movies = data.Search
        
        let output = '';
        $.each(movies, (index, movie) => {
            output += `
            <div class="col-md-3">
                <div class="well text-center">
                    <img src="${movie.Poster}">
                    <h5>${movie.Title}</h5>
                    <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                </div>
            </div>
            `;
        });
        $('#movies').html(output);

    } catch (error) {
            console.log(error)
    }
}

function movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

let getMovie =  async function() {
    let movieId = sessionStorage.getItem('movieId');

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=2aa54ec1`);
        
        const data = await response.json();

        console.log(data)
        let output = '';

            output += `
            <div class="row">
                <div class="info-upper">
                    <div class="col-md-4">
                        <img src="${data.Poster}" class="thumbnail">
                    </div>
                    <div class="col-md-8">
                        <h2 class="text-center">${data.Title}</h2>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Genre:</strong> ${data.Genre}</li>
                            <li class="list-group-item"><strong>Type:</strong> ${data.Type}</li>
                            <li class="list-group-item"><strong>Country:</strong> ${data.Country}</li>
                            <li class="list-group-item"><strong>Language:</strong> ${data.Language}</li>
                            <li class="list-group-item"><strong>Runtime:</strong> ${data.Runtime}</li>
                            <li class="list-group-item"><strong>Released:</strong> ${data.Released}</li>
                            <li class="list-group-item"><strong>Director:</strong> ${data.Director}</li>
                            <li class="list-group-item"><strong>Writer:</strong> ${data.Writer}</li>
                            <li class="list-group-item"><strong>Actors:</strong> ${data.Actors}</li>
                            <li class="list-group-item"><strong>Ratings:</strong> 
                                <table class="table table-hover">
                                    <thead>
                                        <tr>

                                        <th scope="col">IMDB</th>
                                        <th scope="col">Rotten Tomatoes</th>
                                        <th scope="col">Metacritic</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td>${data.Ratings[0].Value}</td>
                                        <td>${data.Ratings[1].Value}</td>
                                        <td>${data.Ratings[2].Value}</td>
                                        </tr>
                                    <tbody>
                                </table>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="info-lower">
                    <h3>Plot</h3>
                    ${data.Plot}
                    <hr>
                    <a href="https://www.imdb.com/title/${data.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                    <a href="index.html" class="btn btn-primary">Go Back To Search</a>
                </div>
            </div>
            `;

        $('#movie').html(output);

    } catch (error) {
            console.log(error)
    }

}


getMovie();