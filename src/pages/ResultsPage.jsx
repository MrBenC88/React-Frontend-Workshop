import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import Pagination from "@material-ui/lab/Pagination";
import { QueriedDataContent } from "../components/QueriedDataContent";
import { TopBar } from "../components/TopBar";
import { Typography } from "@material-ui/core";

export const ResultsPage = () => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  const [queriedData, setQueriedData] = useState([]);
  const [pageNum, setPageNum] = React.useState(1);

  // /repos/{owner}/{repo}/issues
  // https://api.github.com/repos/{owner}/{repo}
  // https://docs.github.com/en/rest/reference/issues#list-repository-issues
  // https://api.github.com/repos/facebook/react/issues?state=open

  const fetchData = async () => {
    try {
      let apiValue = "all";

      const response = await fetch(
        `https://api.github.com/repos/${location.state.owner}/${location.state.repo}/issues?state=${apiValue}&page=${pageNum}&per_page=21`
      );
      const json = await response.json();
      if (json.message) throw new Error(json.message);
      setQueriedData(json);
      
    } catch (err) {
      console.log(err);
      setQueriedData([]);
    }
  };

  const handlePaginationChange = (event, currentPage) => {
    setPageNum(currentPage);
  };

  // useeffect when value changes when u click bottom thigny
  // call fetch data in that useefffect or when the page num changes also call fetch data
  // pagination to change page number - onclick change pagenum react hook

  useEffect(() => {
    // api call - this api call was deceptively simple. it was actually hard af? wtf
    (async () => {
      await fetchData();
    })();
  }, [location, pageNum]);

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        width,
        height,
        flexDirection: "column",
      }}
    >
      <TopBar />

      <Typography variant="h6">
        Current Repo: {location.state.owner} / {location.state.repo}
      </Typography>

      <QueriedDataContent queriedData={queriedData} />

      <div
        style={{
          background: "#FFFFFF",
          marginBottom: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={10}
          color="primary"
          size="large"
          onChange={handlePaginationChange}
          variant="outlined"
          style={{ marginTop: 0 }}
        />{" "}
      </div>
    </div>
  );
};
