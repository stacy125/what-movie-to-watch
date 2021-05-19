import React from 'react'
import ThumbsUp from '../assets/thumb-up.png'
import ThumbsDown from '../assets/thumb-down.png'

const Thumb = ({imbdRating}) => {
    const thumbsUpIcon = <img className='thumb-icon' src={ThumbsUp} alt='thumbs up icon'/>

    const thumbsDownIcon = <img className='thumb-icon' src={ThumbsDown} alt='thumbs down icon'/>

    const ratingCheck = imbdRating > 5 ? thumbsUpIcon : thumbsDownIcon
    return (
        <div>
            {ratingCheck}
        </div>
    )
}

export default Thumb
