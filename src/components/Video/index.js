import React from 'react';
import PropTypes from 'prop-types';

import { 
    HeaderVideoWrap, 
    VideoWrap, 
    VideoInner 
} from './video.styled';

function Video ({history, location}) {
    const { link, title } = location.state;

    const onGoBack = () => {
        history.goBack();
    }

    if(!link) {
        return (
            <VideoWrap>
                <VideoInner>
                    <h1 className="no-video">No video for {title}</h1>
                    <span onClick={onGoBack} >Go Back</span>
                </VideoInner>
            </VideoWrap>
        );
    }

 return (
     <VideoWrap>
         <VideoInner>
            <HeaderVideoWrap>
                <h1>{title}</h1>
                <span onClick={onGoBack}></span>
            </HeaderVideoWrap>
            <video 
                style={{outline: 'none'}} width="100%"
                controls 
                autoPlay
                src={link} />
         </VideoInner>
     </VideoWrap>
 )
}

Video.prototype = {
    history: PropTypes.shape({}),
    location: PropTypes.shape({}),
}

export default Video;