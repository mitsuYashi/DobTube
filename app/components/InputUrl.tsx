import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type Props = {
  urls: URL[];
  setUrls: Dispatch<SetStateAction<URL[]>>;
}

interface Ref {
  urlRef: HTMLInputElement;
}

const InputUrl: React.FC<Props> = ({urls, setUrls}) => {
  const urlRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUrls([...urls, new URL(urlRef.current!.value)]);
    urlRef.current!.value = "";
  };

  useEffect(() => {
    // console.log(urls);
  }, [urls]);

  return (
    <form onSubmit={handleSubmit} style={{position: 'absolute', top: 25, right: 25}}>
      <input type="url" ref={urlRef} pattern="https://.*" required />
      <input type="submit" value="表示" />
    </form>
  );
};

export default InputUrl;
