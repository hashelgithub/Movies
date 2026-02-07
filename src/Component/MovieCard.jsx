function MovieCard({movie}){
    function onClick(){
        alert ("onClick")
    }
    return <div className="MovieCard">
        <div className="Movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onClick}>
                ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}
export default MovieCard