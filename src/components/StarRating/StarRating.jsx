import React from 'react'
import "./StarRating.css"

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export const StarRating = ({ rating, size }) => {

    const stars = [];

    for (let i = 1; i <= 5; i++) {

        if (i <= rating) {
            stars.push(
                <StarIcon className='star' key={i}  style={{fontSize:size}}/>
            );
        } else if (i === Math.ceil(rating) && rating % 1 !==0) {
            stars.push(
                <StarHalfIcon className='star' key={i}  style={{fontSize:size}}/>
            );
        } else {
            stars.push(
                <StarBorderIcon className='star' key={i}  style={{fontSize:size}}/>
            );
        }

    }

    return (
        <li className='star-container'>
            {stars} ({rating})
        </li>
    )
}
