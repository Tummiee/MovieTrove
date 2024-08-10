import React from 'react'
import '../Styles/Home.css'
import Badboys from '../assets/Badboys.jpg'
import { GoDotFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import StarRating from '../components/StarRating';
import { IoIosSearch } from "react-icons/io";

const Home = () => {


    
  return (
    <div>
        <div className='big-poster'>
            <img className='big-poster-img' src={Badboys}/>
            <div className='cast'>
                <GoDotFill />
                <p>Lead Actor</p>
                <GoDotFill />
                <GoDotFill />
            </div>
            <div className='big-poster-bottom-bar'>
                <div className='left'>
                    <div className='dateNRating'>
                        <p>PUBLISHED<span>FEB 20, 2024</span></p>
                    </div>
                    <div className='dateNRating'>
                        <p>UPDATED<span>FEB 20, 2024</span></p>
                    </div>
                    <div className='dateNRating'>
                        <p style={{display: 'flex'}}>RATING
                        <StarRating rating={4.5} />
                        </p>
                    </div>
                </div>
                <div className='right'>
                        <p><span><FaRegHeart /></span>2,548</p>
                        <p><span><IoChatbubblesOutline /></span>21</p>
                        <p><span><MdOutlineFileDownload /></span>564</p>
                </div>
            </div>
        </div>

        <div className="lower-home-page">
            <div className="mini-nav">
                <h3>FEATURED MOVIES</h3>
                <h4><i>New Released <span>/ Trailers & Clips</span></i></h4>
                <form className='search'>
                    <input type="text" placeholder='search'></input>
                    <button type='button' className='btn'><IoIosSearch /></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home