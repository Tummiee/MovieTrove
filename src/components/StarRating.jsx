import { MdStarRate } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";

import React from 'react'

const StarRating = ({rating}) => {
    const renderStars = () => {
        const stars = [];
        
        for (let i = 1; i <= 5; i++) {
          if (rating >= i) {
            // Full star
            stars.push(<MdStarRate key={i} style={{ color: '#ff0000',
                                                    fontSize: 'clamp(1rem, 1.5vw, 2rem)'
             }} />);
          } else if (rating >= i - 0.5) {
            // Half star
            stars.push(<MdOutlineStarHalf key={i} style={{ color: '#ff0000',
                                                        position: 'relative',
                                                        top: '.22%',
                                                        fontSize: 'clamp(1rem, 1.5vw, 2rem)'

             }} />);
          } else {
            // Empty star
            stars.push(<MdOutlineStarRate key={i} style={{ color: '#ff0000',
                                                            fontSize: 'clamp(1rem, 1.5vw, 2rem)'
             }} />);
          }
        }
    
        return stars;
      };
    
      return <div>{renderStars()}</div>;
}

export default StarRating