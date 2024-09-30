class Movie{
    title: string;
    year: string;
    poster: string;

    constructor(title: string, year: string, poster: string) {
        this.title = title;
        this.year = year;
        this.poster = poster;
    }
    
}

const movies: Movie[] = [
    new Movie('Little Women', "2019", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKc2q2Za8bnrdTAm4KxkszoyWLWsvrHEtVWg&s'),
    new Movie('Pride & prejudice', "2005", 'https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/12/Pride-and-Prejudice-movie-review-thumbnail.jpg?fit=3000%2C1941&ssl=1'),
    new Movie('Sense and Sensibility', "1995", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3VHZFsuM4qin6VL390dvtQWNU0dbc5TGUQ&s')

];

function displayMovie(x: Movie[]) {
    const dis_movie = document.getElementById('results');
    if (!dis_movie) {
        console.log("NOT FOUND");
        return;
     }
     dis_movie.innerHTML = ''; 
    
 
    x.forEach(movies => {
        const element = document.createElement('div');
        element.innerHTML = `<h2>${movies.title} (${movies.year})</h2>
            <img src="${movies.poster}" alt="${movies.title}" />`;
    

  
   dis_movie.appendChild(element);
    }
  
);
        
}
const input = document.getElementById('searchInput') as HTMLInputElement;

const Button= document.getElementById('searchButton') as HTMLButtonElement;

Button.addEventListener('click', () => {
    const valueOfSearch = input.value.trim().toLocaleLowerCase();
    const regex = new RegExp(valueOfSearch,"i"); 
    const _filter = movies.filter(m => regex.test(m.title) || regex.test(m.year));
   
    displayMovie(_filter);
}
);

/*const _filter = movies.filter(m => 
    m.title.toLowerCase().includes(valueOfSearch) || m.year.toString().includes(valueOfSearch)
);*/
