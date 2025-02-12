import React, { useState, useEffect } from "react";
import QuickreaderApi from "../api";
import { Card, CardBody } from "reactstrap";

const RecentEntries = () => {
  const [recentSummaries, setRecentSummaries] = useState([]);

  useEffect(() => {
    async function fetchRecentEntries() {
      try {
        let response = await QuickreaderApi.getRecentSummaries();
        // Access the data property from the response
        setRecentSummaries(response.data || []);
      } catch (error) {
        console.error("Error fetching recent summaries:", error);
        setRecentSummaries([]);
      }
    }
    fetchRecentEntries();
  }, []);

  if (recentSummaries.length === 0) {
    return <div>No recent entries available.</div>;
  }

  return (
    <div className="recent-entries" style={{ marginTop: "20px" }}>
      <h2>Recently Created Summaries</h2>
      {recentSummaries.data.map((entry, index) => (
        <Card key={index} className="mb-3">
          <CardBody>
            <p>
              The {toTitleCase(entry.source)} {toTitleCase(entry.section)}{" "}
              section, {toTitleCase(entry.manner).toLowerCase()}
            </p>
            <p>{new Date(entry.newsdate).toDateString()}</p>

            <p>{entry.summary}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};

export default RecentEntries;
