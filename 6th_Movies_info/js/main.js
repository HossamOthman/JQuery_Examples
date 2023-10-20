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