import React, { useState, useEffect } from "react";
import QuickreaderApi from "../api";
import SummaryBox from "../components/SummaryBox";
import { Spinner, Button } from "reactstrap";
import ChoicesForm from "../components/ChoicesForm";

const Home = () => {
  const [articles, setArticles] = useState(null);
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  // search articles from API.
  async function searchArticles(type) {
    let articles = await QuickreaderApi.getArticles(type);
    setArticles(articles);
  }

  // summarize articles with ChatGPT.
  async function summarize(data) {
    let summary = await QuickreaderApi.summarize(data);
    setSummary(summary);
    setIsLoading(false);
  }

  // get articles from API on mount.
  useEffect(() => {
    console.log("useEffect on NYT Page");
    searchArticles();
  }, []);

  // helper to reset page.
  const resetPage = () => {
    console.log("cleaning up page");
    setSummary(null);
  };

  // loading spinner.
  if (!articles || isLoading) return <Spinner />;

  if (summary) {
    console.log("sending summary to summary box");
    return <SummaryBox summary={summary} resetPage={resetPage} />;
  }

  // parse out content from articles.
  let selects = articles.message.results;
  let top3 = selects.slice(3, 6);
  let top3Data = top3.map((c) => c.title + ": " + c.abstract);
  let top3joined = top3Data.join(". ");
  let data = {
    prompt: top3joined,
  };

  return (
    <div className="container text-center">
      <h3>Welcome to Quickreader</h3>
      <h5>AI-Assisted Summaries for The New York Times</h5>
      <i>New York Times front page loaded and ready!</i>
      <br></br>
      <br></br>
      <ChoicesForm
        summarize={summarize}
        setIsLoading={setIsLoading}
        data={data}
      />
    </div>
  );
};

export default Home;
