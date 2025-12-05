import * as React from 'react';

interface IVideoThumbnailProps {
    image: string,
    onClick?: () => void;
    bg?: string;
    rounded?: string;
}

const VideoThumbnail: React.FunctionComponent<IVideoThumbnailProps> = ({
    image,
    onClick,
    bg = "#6c757d",
    rounded = "15px",
}) => {
  return(
    <div className='video-thumb-container' style={{backgroundColor: bg, borderRadius: rounded, height: '350px'}}>
        <div className='video-thumb-wrapper' onClick={onClick}>
            <img src={image} className='video-thumb-img'/>
            <div className='video-thumb-overlay'></div>
            <div className="video-thumb-play ps-1">
                <i className="bi bi-play-fill" style={{fontSize: "40px"}}></i>
            </div>
        </div>
    </div>
  );
};

export default VideoThumbnail;
