import React, { useState, useEffect } from "react";
import QuickreaderApi from "../api";
import SummaryBox from "../components/SummaryBox";
import { Card, CardTitle } from "reactstrap";
import LoadingCard from "../components/LoadingCard";
import ChoicesForm from "../components/ChoicesForm";
import Footer from "../home/Footer";

const Home = () => {
  const [articles, setArticles] = useState(null);
  const [section, setSection] = useState("home");
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  function updateSection(section) {
    setSection(section);
  }

  // search articles from API.
  async function searchArticles(section) {
    let articles = await QuickreaderApi.getArticles(section);
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
    console.log("getting articles from API");
    searchArticles(section);
  }, [section]);

  // helper to reset page.
  const resetPage = () => {
    console.log("cleaning up page");
    setSummary(null);
    setSection("home");
  };

  // loading spinner.
  if (!articles || isLoading) return <LoadingCard />;

  if (summary) {
    console.log("sending summary to summary box");
    return <SummaryBox summary={summary} resetPage={resetPage} />;
  }

  // MOVING THIS TO BACKEND.
  // parse out content from articles.
  // let selects = articles.message.results;
  // let top3 = selects.slice(3, 6);
  // let top3Data = top3.map((c) => c.title + ": " + c.abstract);
  // let top3joined = top3Data.join(". ");
  // let time = articles.message.last_updated;

  // let data = {
  //   prompt: articles,
  // };

  return (
    <div className="container text-center">
      <Card
        body
        className="HomeCard text-center"
        style={{
          width: "50vw",
          minWidth: "30rem",
          backgroundColor: "mintcream",
        }}
      >
        <CardTitle>
          <h3>Welcome to paper-route.ai</h3>
          <h5>AI-Assisted Summaries for the News</h5>
        </CardTitle>
        <ChoicesForm
          updateSection={updateSection}
          summarize={summarize}
          setIsLoading={setIsLoading}
          articles={articles}
        />
        <Footer />
      </Card>
    </div>
  );
};

export default Home;
