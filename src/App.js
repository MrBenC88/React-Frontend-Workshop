import "./App.css";
import { Routes } from "./Routes";

/**
 * The App.js is a file for the App component. It is the main component in React which acts as a container for all othercomponents.
 * App.css is the corresponding css file associated with the App component.
 * Typically, if you did a create-react-app command and make a brand new "Hello World" app, this page will be filled with the templated code.
 *
 * In this workshop, we decided to render the routes first with React Router.
 * As you can see the, there is a <Routes/>
 */

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
