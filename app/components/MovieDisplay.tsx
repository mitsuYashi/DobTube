import React, { useEffect } from "react";

type Props = {
  url: URL;
};

const MovieDisplay: React.FC<Props> = ({ url }) => {
  // https://www.youtube.com/watch?v=NOpzP5TQj8c

  const youtubeNum = url.href.indexOf("?v=", 0);
  const youtubeId = url.href.substr(youtubeNum + 3);

  const prNum = url.href.indexOf("?viewkey=", 0);
  const prId = url.href.substr(prNum + 9);

  useEffect(() => {
    console.log(youtubeId);
  }, []);

  return (
    <div style={{ height: "45vh" }}>
      {youtubeNum != -1 ? (
        <iframe
          width="100%"
          height="100%"
          src={"https://www.youtube.com/embed/" + youtubeId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <iframe
          src={"https://www.pornhub.com/embed/" + prId}
          frameBorder="0"
          width="100%"
          height="100%"
          scrolling="no"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MovieDisplay;
