import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

import { QueriedDataContent } from "../components/QueriedDataContent";
import { TopBar } from "../components/TopBar";

import { Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

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


  // =================================================================================================================================================
  // TODO #8: Create a useState hook for queriedData with a method called setQueriedData to update it. The initial value should be an empty array -> []
  //         Hint: look at the pageNum, setPageNum hook below as an example!

  // useState hook to keep track of the queriedData. Everytime we successfully do an API call and fetch the json response, we
  // will store it in the queriedData with the method setQueriedData()
 

  // =================================================================================================================================================

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
      // The Fetch API accesses resources across the network.
      // You can make HTTP requests (using GET, POST and other methods), download, and upload files.
      // We are doing a GET req to the GitHub API
      // fetch() starts a request and returns a promise. When the request completes, the promise is resolved
      // with the Response object. If the request fails due to some network problems, the promise is rejected.
      // Documentation: https://dmitripavlutin.com/javascript-fetch-async-await/

      // ================================================================================================================================================
      // TODO #9: Complete the fetch! Look at the GitHub documentation for the "List issues in a repository"
      //          Hint: https://api.github.com/repos/facebook/react/issues?state=all&page=$1&per_page=21
      const response = "";
      // waits until the request completes..

      // TODO #10: Store the response in the json var.
      const json = "";

      // ================================================================================================================================================
      if (json.message) throw new Error(json.message);


      // TODO #11: use the setQueriedData method to update our queriedData state to be our response.


    } catch (err) {
      // if error, log error and set the queriedData state to be empty
      console.log(err);
      setQueriedData([]);
    }
  };

  // event handler to handle change of page number
  // sets the pageNum state with the setPageNum method
  const handlePaginationChange = (event, pageNumber) => {
    setPageNum(pageNumber);
  };


  /*
  What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. 
  React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
  
  In this case, we will call the fetchData method everytime the location or pageNum values are changed.
  Why? The reason is because when we select a different page, we need a brand new API call with the updated values! 

  Documentation:
  - https://reactjs.org/docs/hooks-reference.html#useeffect
  - https://reactjs.org/docs/hooks-effect.html
  */

  //  ================================================================================================================================================ 
  // TODO #12: Complete the following useEffect. Call the fetchData method everytime the location or pageNum changes!
  useEffect(() => {
    (async () => {
      
    })();
  }, []);
  //  ================================================================================================================================================ 

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
      {/* The component representing the bar at top (contains App title and button to direct to new search) */}
      <TopBar />

      {/* Section for text displaying current repo. */}
      <Typography variant="h6">
        Current Repo: {location.state.owner} / {location.state.repo}
      </Typography>

      {/*  ================================================================================================================================================ */}
      {/* TODO #13: Add the new QueriedDataContent component and pass in the queriedData prop!
      
       This component contains the grid of card components and uses the queriedData from the API.
      In React, we will pass props that are necessary into the component as shown below. 
      Documentation for using components with props: https://reactjs.org/docs/components-and-props.html*/}

      
      {/*  ================================================================================================================================================ */}
      
      
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
        {/* What is pagination? 
        Pagination, also known as paging, is the process of dividing a document into discrete pages, either electronic pages or printed pages
        
        As the GitHub API returns possibly an incredibly large amount of data. Pagination is necessary to split the data.
        We query the data by page with each page showing only 21 results. 
        
        We use the handlePaginationChange event handler that is triggered everytime the user selects a different page number.*/}
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
