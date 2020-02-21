import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading...</div>
    } 

    return (
        <div>
            <div className="ui segment">
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>

        </div>
    )
}

export default VideoDetail;
