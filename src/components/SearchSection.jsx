import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import { useHistory } from "react-router-dom";

/**
 * This is our SearchSection component.
 * It contains all the code and logic for the SearchBar.
 * We will be using a SearchBar from a library called "material-ui-search-bar" to simplify our workshop.
 * We will also be using useHistory hook from "react-router-dom".
 *
 * What is a hook? (https://reactjs.org/docs/hooks-intro.html, https://reactjs.org/docs/hooks-overview.html)
 *  Hooks enable us to use state and other React features without writing a class.
 *
 */
export const SearchSection = () => {
  /*
  This is a hook. useState returns a pair: the current state value and a function that lets you update it.
  For hooks, we use the array destructuring syntax which lets us give different names to the state variables we declared by calling useState.
  We define search which will be a variable current equal to an empty string (from the useState("") which is our default value we have set).
  We will define a setSearch function enabling us to update the search variable. This function is called inside an event handler usually.
  */

  // =================================================================================================================================

  // TODO #5: Create a new useState hook with a var called search and method called setSearch.
  //          Set the initial state to be an empty string!


  // =================================================================================================================================

  /* 
    We will be using a useHistory hook provided from the React Router. It enables us to access the history instance used by React Router.
    This will enable us to redirect users to another page and also access data from the previous page.
    useHistory has many properties, but we will use specifically the pathname and state.

    pathname: A string containing the path of the URL
    state: An object containing location-specific state that was provided to e.g. push(path, state) when this location was pushed onto the stack. Only available in browser and memory history.

    We will use the push method to push a new entry onto the history stack so we can redirect users to a new page.
    push(path, [state])

    Documentation: https://www.geeksforgeeks.org/react-router-hooks/, https://stackoverflow.com/questions/44121069/how-to-pass-params-with-history-push-link-redirect-in-react-router-v4
  */
  const history = useHistory();

  /*
  This is an event handler. We will use this event handler to handle the actual search.
  When a user presses enter after inputing a valid repository url:
  - github.com/facebook/react
  - https://github.com/facebook/react

  This handleSearch function will trigger. We will split the query by a delimiter "/" so that we can get the information submitted by the user.
  Specifically, the info we want to get would be the repository owner and the actually repository name.
  This way we can do an API call to GitHub's API.

  There are two types of inputs we will accept.
  1. One url that starts with github.com
  2. One url that starts with https:// 

  When we call the split function, we will get
    // github.com/facebook/react
    // [github.com, facebook, react]
    //  0              1         2

    // https://github.com/facebook/react
    // [https:, /, github.com, facebook, react]
    //  0       1  2           3         4

  We use 0-based array indexing to get the values we want.
  */

  // =================================================================================================================================
  // TODO #7: Attempt to understand the logic of the handleSearch event handler!

  const handleSearch = (query) => {
    console.log(`parse data and Call GitHub API:  ${query}`);
    const arr = query.split("/");

    // Extract required data based on array position and url format.
    // Return an alert box with error if url doesn't follow correct format.
    // Use the push method to push a new entry into our history stack.
    // This will redirect users to the /results route and also set the state object to the properties we would like.

    // handle github.com/{ownerOfRepo}/{repoName}
    if (arr[0].includes("github.com")) {
      history.push({
        pathname: "/results",
        state: { owner: arr[1], repo: arr[2] },
      });
    }

    // handle https://github.com/{ownerOfRepo}/{repoName}
    else if (arr[0].includes("https:")) {
      history.push({
        pathname: "/results",
        state: { owner: arr[3], repo: arr[4] },
      });
    }

    // handle error
    else {
      alert("Invalid Repo URL");
    }
  };
  // =================================================================================================================================

  return (
    // render the actual SearchBar component.
    // onChange-> Fired when the text value changes. (inside SearchBar)
    // onRequestSearch-> Fired when the search icon is clicked. (or user presses enter key)

    // TODO #6: Import the SearchBar and use the following properties!
    // - value={""}     // done for you
    // - onChange = ?          // Call the setSearch function upon change in the input! onChange!
    // - onRequestSearch = ?   // Call the handleSearch event handler function upon search (user clicks enter)
    // - placeholder={"Paste a link to a GitHub repository!"} // done for you!

    <div>

    </div>
  );
};
