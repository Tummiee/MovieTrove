import {useEffect, useState} from 'react'
import '../Styles/Home.css'
import { IoIosSearch } from "react-icons/io";
import fetchIMDBData from '../utils/api';
import MovieCard from '../components/MovieCard';
import { FaRegPlayCircle } from "react-icons/fa";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const result = await fetchIMDBData(query);
          setMovies(result);
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await fetchIMDBData('Games');
            setMovies(result);
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
      if (loading) return <p>Loading...</p>;
    

    
  return (
    <div className='home'>

        <div className="whole-page">
            <div className="mini-nav">
            <div className='logo'>M<FaRegPlayCircle style={{color: '#990202', 
                                                            position: 'relative',
                                                            top: '.2vh'
            }}/>VIETROVE</div>
                <h4><i>New Released <span>/ Seaerch Trailers & Clips 👉</span></i></h4>
                <form className='search' onSubmit={handleSearch}>
                    <input type="text" placeholder='search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    ></input>
                    <button type='submit' className='btn'><IoIosSearch /></button>
                </form>
            </div>
        </div>

        <div className="movie-cards">
        {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}

        </div>
    </div>
  )
}

export default Home