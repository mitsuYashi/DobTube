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
          urls.map((data: URL) => {
            return <MovieDisplay url={data} />
          })
        }
      </> 
    )
  }

  return (
    <div>
      <h1>DobTube</h1>
      <div>
        <InputUrl urls={urls} setUrls={setUrls} />
        {ForUrls(urls)}
      </div>
    </div>
  );
};

export default Home;
