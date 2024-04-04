import React, { useState, useEffect } from "react";

const TimeAgoExample = () => {
  const [articleTimestamp, setArticleTimestamp] = useState(
    "2024-02-10T12:30:00Z"
  );

  // Funcție pentru a afișa timpul în urmă
  const timeAgo = (timestamp) => {
    const now = new Date();
    const articleTime = new Date(timestamp);
    const differenceInMilliseconds = now - articleTime;
    const minutesAgo = Math.floor(differenceInMilliseconds / (1000 * 60));

    return `${minutesAgo} min read`;
  };

  // Actualizează timpul în urmă la fiecare 60 de secunde
  useEffect(() => {
    const interval = setInterval(() => {
      setArticleTimestamp((prevTimestamp) => prevTimestamp); // Forțează re-render pentru a actualiza timpul
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return <div>{timeAgo(articleTimestamp)}</div>;
};

export default TimeAgoExample;
