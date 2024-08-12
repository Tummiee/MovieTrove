import '../Styles/Home.css'

const MovieCard = ({ movie }) => {
    const { l: title, i: imageObj, q: rating, s: overview } = movie;
    const imageUrl = imageObj?.imageUrl;
  
  
    return (
      <div className="movie-card">
        <div className="movie">
                <img src={imageUrl} alt={title} className="movie-card__image"/>

                <div className="movie-info">
                    <h3>{title}</h3>
                    <span className='green'>{rating}</span>
                </div>

                <div className="overview">
                    <h3>Overview</h3>
                    {overview}
                </div>
            </div>
      </div>
    );
  };
  
  export default MovieCard;