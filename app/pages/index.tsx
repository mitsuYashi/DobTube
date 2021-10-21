import type { NextPage } from "next";
import { useEffect, useState } from "react";
import InputUrl from "../components/InputUrl";
import MovieDisplay from "../components/MovieDisplay";

interface State {
  urls: URL[];
}

const initialState: State = {
  urls: [],
};

const Home: NextPage = () => {
  const [urls, setUrls] = useState(initialState.urls);

  const ForUrls = (urls: URL[]) => {
    return (
      <>
        {
          urls.map((data, index) => {
            return <MovieDisplay url={data} key={index} />
          })
        }
      </> 
    )
  }

  return (
    <div>
      <div>
        <h2>DobTube</h2>
        <InputUrl urls={urls} setUrls={setUrls} />
      </div>
        <div style={{ width: "100vw", height: "45vh", display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {ForUrls(urls)}
        </div>
    </div>
  );
};

export default Home;
