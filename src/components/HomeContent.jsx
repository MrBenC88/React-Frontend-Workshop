import React from "react";
import { Typography } from "@material-ui/core";
import { SearchSection } from "../components/SearchSection";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

export const HomeContent = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div
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
        <img
          src={"https://i.imgur.com/1zz0uc8.png"}
          height="30%"
          alt="logo"
          style={{ marginTop: 20 }}
        />
        <Typography variant="h4">GitHub Issue Explorer</Typography>
        <SearchSection />
        <Typography variant="h6">
          View issues quicker, easier, and more conveniently.
        </Typography>
      </div>
    </div>
  );
};
