import React from "react";
import { HomeContent } from "../components/HomeContent";

/**
 * This page will be our homepage. It will render home page contents when we route to / or /home.
 * Typically, React pages consists of many other components.
 * Components can be defined as classes or functions.
 *
 * We will be using functional components where each of our components will be a function,
 * A function can accept "props" which is short for properties which is an object argument with data and returnsa React element.
 *
 * Documentation: https://reactjs.org/docs/react-component.html
 *                https://reactjs.org/docs/components-and-props.html
 */


//  TODO #3: Navigate into the HomeContent component and try to understand the code!

export const Home = () => {
  return <HomeContent />; // Our component that contains the Home's component
};
