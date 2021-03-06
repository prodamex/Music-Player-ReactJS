import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from "@fortawesome/free-solid-svg-icons"


const Player = () => {


    return (
    <div className='Player'>
        <div className="time-control">
            <p>Start Time</p>
            <input type="range"/>
            <p>End time</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon className='play' icon={faPlay}/>
        </div>
    </div>
        

    )
}
export default Player