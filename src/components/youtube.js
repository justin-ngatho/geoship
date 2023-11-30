import React from 'react';

const YouTubeEmbed = ({ videoId, width, height }) => {
  const embedUrl = 'https://www.youtube.com/embed/OAxfCPbTW8Y?si=yfVC2-lv16jMPHHN';

  return (
    <div className='youtube'>
      <iframe
        width={width || "700"}
        height={height || "400"}
        src={embedUrl}
        frameBorder="20"
        allowFullScreen
        title="YouTube Video"
        
      />
    </div>
  );
};

export default YouTubeEmbed;
