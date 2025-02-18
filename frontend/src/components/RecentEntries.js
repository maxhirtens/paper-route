import React, { useState, useEffect } from "react";
import QuickreaderApi from "../api";
import { Card, CardBody } from "reactstrap";
import ErrorAlert from "../components/ErrorAlert";

const RecentEntries = () => {
  const [recentSummaries, setRecentSummaries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecentEntries() {
      try {
        let response = await QuickreaderApi.getRecentSummaries();
        setRecentSummaries(response || []);
      } catch (error) {
        console.log("RecentEntries caught error:", error); // Add this debug line
        setError(error);
        setRecentSummaries([]);
      }
    }
    fetchRecentEntries();
  }, []);

  return (
    <div className="recent-entries" style={{ marginTop: "20px" }}>
      <ErrorAlert error={error} />

      {recentSummaries.length === 0 ? (
        <div>Loading summaries...</div>
      ) : (
        <>
          <h2>Recently Created Summaries</h2>
          {recentSummaries.data && recentSummaries.data.length > 0 ? (
            recentSummaries.data.map((entry, index) => (
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
            ))
          ) : (
            <div>No recent summaries available.</div>
          )}
        </>
      )}
    </div>
  );

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};

export default RecentEntries;
