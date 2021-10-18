import React, { useEffect } from "react";

type Props = {
    url: URL;
}

const MovieDisplay: React.FC<Props> = (url) => {
    // https://www.youtube.com/watch?v=NOpzP5TQj8c
    const valUrl = url as unknown as string;
    const vNum: number = valUrl.indexOf('?v=', 0);
    const youtubeId = valUrl.substr(0, vNum + 2);

    useEffect(() => {
        console.log(youtubeId);
    }, [youtubeId]);

    return (
        <div>
            
        </div>
    )
}

export default MovieDisplay;