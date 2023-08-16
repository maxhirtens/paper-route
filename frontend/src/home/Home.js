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
    searchArticles(section);
    setSection(section);
  }, [section]);

  // helper to reset page.
  const resetPage = () => {
    setSummary(null);
    setSection("home");
  };

  // loading spinner.
  if (!articles || isLoading) return <LoadingCard />;

  if (summary) {
    return (
      <SummaryBox summary={summary} section={section} resetPage={resetPage} />
    );
  }

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
          <div class="title">
            <h3 className="title-text">paper-route.ai</h3>
            <i>AI-Assisted Summaries for the News</i>
          </div>
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
