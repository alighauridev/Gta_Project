import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const LodingBar = ({ time }) => {
  const [progress, setProgress] = useState();

  useEffect(() => {
    time && setProgress(10);
    setProgress(40);
    setProgress(70);
    setProgress(100);
  }, [time]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
};

export default LodingBar;
