import type { NextPage } from "next";
import { useEffect, useState } from "react";
import InputUrl from "../components/InputUrl";
import MovieDisplay from "../components/MovieDisplay";

interface State {
  urls: URL[];
  allVideo: HTMLVideoElement[];
  allIframeDocument: Document[];
}

const initialState: State = {
  urls: [],
  allVideo: [],
  allIframeDocument: [],
};

const Home: NextPage = () => {
  const [urls, setUrls] = useState(initialState.urls);
  const [allVideo, setAllVideo] = useState(initialState.allVideo);
  const [allIframeDocument, setAllIframeDocument] = useState(initialState.allIframeDocument);

  useEffect(() => {
    const iframeElement = document.getElementsByTagName('iframe');
    // iframeElement!.map((data: HTMLCollection, index: number) => {
    //   setAllIframeDocument([...allIframeDocument, data[index].ownerDocument]);
    // })
  }, [urls]);

  const handlePlayClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(document.getElementsByTagName("video"));
  };

  const ForUrls = (urls: URL[]) => {
    return (
      <>
        {urls.map((data, index) => {
          return <MovieDisplay url={data} key={index} />;
        })}
      </>
    );
  };

  return (
    <div>
      <div>
        <h2>DobTube</h2>
        <div style={{ position: "absolute", top: 25, left: "50%" }}>
          <button onClick={handlePlayClick}>play</button>
          <button>pause</button>
        </div>
        <InputUrl urls={urls} setUrls={setUrls} />
      </div>
      <div
        style={{
          width: "100vw",
          height: "45vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {ForUrls(urls)}
      </div>
    </div>
  );
};

export default Home;
