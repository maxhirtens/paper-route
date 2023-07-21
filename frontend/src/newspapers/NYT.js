import React, { useEffect, useState } from "react";
import QuickreaderApi from "../api";
import { Spinner } from "reactstrap";

const NYT = () => {
  const [articles, setArticles] = useState(null);

  // get top 3 from API.
  async function searchArticles() {
    console.log(`searching API for NYT articles`);
    let articles = await QuickreaderApi.getArticles();
    setArticles(articles);
  }

  // get jobs from API on mount.
  useEffect(() => {
    console.log("useEffect on NYT Page");
    searchArticles();
  }, []);

  if (!articles) return <Spinner />;

  let selects = articles.message.results;
  let top3 = selects.slice(3, 6);

  return (
    <div className="container text-center">
      <h1>Today's Top News from the New York Times</h1>
      {selects.map((a) => (
        <div>{a.title}</div>
      ))}
    </div>
  );
};

export default NYT;
