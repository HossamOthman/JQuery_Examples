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
 

    } catch (error) {
            console.log(error)
     
    }
    
    
     
    
}