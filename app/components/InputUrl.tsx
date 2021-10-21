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
    // console.log(urlRef.current!.value)
    setUrls([...urls, new URL(urlRef.current!.value)]);
    urlRef.current!.value = "";
  };

  useEffect(() => {
    console.log(urls);
  }, [urls]);

  return (
    <form onSubmit={handleSubmit} style={{position: 'absolute', top: 10, right: 10}}>
      <input type="url" ref={urlRef} pattern="https://.*" required />
      <input type="submit" value="表示" />
    </form>
  );
};

export default InputUrl;
