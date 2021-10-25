import React, { useEffect, useRef } from "react";

type Props = {
  url: URL;
};

const MovieDisplay: React.FC<Props> = ({ url }) => {
  const iflameRef = useRef<HTMLIFrameElement>();

  // https://www.youtube.com/watch?v=NOpzP5TQj8c

  const youtubeNum = url.href.indexOf("?v=", 0);
  const youtubeId = url.href.substr(youtubeNum + 3, 11);

  const prNum = url.href.indexOf("?viewkey=", 0);
  const prId = url.href.substr(prNum + 9);

  const nicoNum = url.href.lastIndexOf("/");
  const nicoId = url.href.substr(nicoNum + 1);

  useEffect(() => {
    // console.log(youtubeId);
  }, []);

  return (
    <div style={{ height: "45vh" }}>
      {youtubeNum != -1 ? (
        <iframe
          width="100%"
          height="100%"
          src={"https://www.youtube.com/embed/" + youtubeId + "?enablejsapi=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : prNum != -1 ? (
        <iframe
          src={"https://www.pornhub.com/embed/" + prId}
          frameBorder="0"
          width="100%"
          height="100%"
          scrolling="no"
          allowFullScreen
        ></iframe>
      ) : nicoNum != -1 ? (
        <iframe
          src={"http://embed.nicovideo.jp/watch/" + nicoId}
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      ) : null}
    </div>
  );
};

export default MovieDisplay;
