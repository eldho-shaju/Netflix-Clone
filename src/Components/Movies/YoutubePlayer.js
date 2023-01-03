import React from 'react'
import Youtube from "react-youtube";
import { Icon } from "@iconify/react";
import closeRounded from '@iconify/icons-material-symbols/close-rounded';
import './Styles/YoutubePlayer.css'

const YoutubePlayer = ({trailer, setTrailer}) => {

    const closeYoutube = () => {
        setTrailer('')
    }

    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <div id='youtube'>
            <div className='video-container'>
                <div className="close-button" onClick={closeYoutube}>
                    <Icon icon={closeRounded} color="white" />
                </div>
                <div>
                    <Youtube opts={opts} videoId={trailer.key} onload="iFrameResize()" />
                </div>
            </div>
        </div>
    )
}

export default YoutubePlayer