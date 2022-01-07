import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import Pagination from "@material-ui/lab/Pagination";
import { QueriedDataContent } from "../components/QueriedDataContent";
import { TopBar } from "../components/TopBar";
import { Typography } from "@material-ui/core";

/**
 * This is our Results Page!
 * This is the page that we want to render when we route to /results.
 * The objective of this page is to render all the Github issues that we have fetched from a GitHub API.
 *
 * We will useLocation which is another React Router hook!
 * This hook returns the location object used by the react-router. This object represents the current URL and is immutable.
 * Whenever the URL changes, the useLocation() hook returns a newly updated location object.
 * We will use this to extract from the state of our previous useHistory().
 *
 * Using the location object from const location = useLocation(); we will access the state from the entry we had
 * pushed earlier from the SearchSection component. We will extract the data from it necessary to do the API call.
 *
 */
export const ResultsPage = () => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();

  // Two examples of useState hooks!

  // useState hook to keep track of the queriedData. Everytime we successfully do an API call and fetch the json response, we
  // will store it in the queriedData with the method setQueriedData()
  const [queriedData, setQueriedData] = useState([]);

  // Use this hook to useState hook to keep track of pageNum and update.
  const [pageNum, setPageNum] = React.useState(1);

  /**
   * Now, let's take a look at the GitHib api!
   * GitHub API docs: https://docs.github.com/en/rest/reference/issues#list-repository-issues
   *
   * Objective: Use GitHub API to show a list of all the GitHub issues from a specific repo!
   *
   * We will use the following API
   * List issues in a repository.
   * Format: /repos/{owner}/{repo}/issues
   *  https://api.github.com/repos/{owner}/{repo}
   *
   * Example: https://api.github.com/repos/facebook/react/issues?state=open
   *
   */

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

  const handlePaginationChange = (event, pageNumber) => {
    setPageNum(pageNumber);
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
