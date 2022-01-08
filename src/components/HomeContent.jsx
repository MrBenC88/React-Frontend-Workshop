import React from "react";
import { Typography } from "@material-ui/core";
import { SearchSection } from "../components/SearchSection";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

/**
 * This is our first component. It is a component containing the homepage's content.
 * We can use inline styles or separate it into a separate css file and import it in as seen before.
 * To save time, in this workshop, the styling is done for you.
 *
 * Note that all React expressions must in a one parent element. In this case, we put all our elements inside a parent <div> </div>
 *
 * Documentation:   Inline styling with CSS:   https://www.w3schools.com/react/react_css.asp
 *                  Using props and component: https://reactjs.org/docs/components-and-props.html
 */
export const HomeContent = () => {
  // We want to get the width, height of the window to simplify styling/resizing when we resize webpage.
  // useWindowDimensions -> Hook to update the Window Dimensions (Documentation: https://usehooks.com/useWindowSize/)
  const { width, height } = useWindowDimensions();

  return (
    <div // This is our parent div.
      style={{
        display: "flex",
        width,
        height,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <div
        style={{
          width: "90%",
          maxWidth: "90%",
          height: "90%",
        }}
      >
        <img // This is the image element that has been rendered
          src={"https://i.imgur.com/1zz0uc8.png"}
          height="30%"
          alt="logo"
          style={{ marginTop: 20 }}
        />

        {/* This contains the other parts of the home page content. */}
        <Typography variant="h4">GitHub Issue Explorer</Typography>

        {/* We call our search component for our search bar here! It is generally better design to extract reusable 
        parts of code into components which can be found in the components folder */}

        {/* TODO #4: Navigate into the <SearchSection/> component and try to understand what it does!  */}
        <SearchSection />

        <Typography variant="h6">
          View issues quicker, easier, and more conveniently.
        </Typography>
      </div>
    </div>
  );
};
