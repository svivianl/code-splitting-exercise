import React, { Fragment, lazy, useState } from "react";
import "./App.css";

import Page1 from "./Components/Page1";
// Part 1 - No Code Splitting
// import Page2 from "./Components/Page2";
// import Page3 from "./Components/Page3";
// Part 3 - Cleaner Code Splitting
import AsyncComponent from "./AsyncComponent";

// const Part1 = (route, onRouteChange) => {
//   switch (route) {
//     case "page1":
//       return <Page1 onRouteChange={onRouteChange} />;
//     case "page2":
//       return <Page2 onRouteChange={onRouteChange} />;
//     default:
//       return <Page3 onRouteChange={onRouteChange} />;
//   }
// };

const Part3 = (route, onRouteChange) => {
  if (route === "page1") {
    return <Page1 onRouteChange={onRouteChange} />;
  }

  if (route === "page2") {
    const AsyncPage2 = AsyncComponent(() => import("./Components/Page2"));
    return <AsyncPage2 onRouteChange={onRouteChange} />;
  }

  const AsyncPage3 = AsyncComponent(() => import("./Components/Page3"));
  return <AsyncPage3 onRouteChange={onRouteChange} />;
};

const App = () => {
  const [route, setRoute] = useState("page1");

  return (
    // Part 1 - No code splitting
    // <Fragment>{Part1(route, setRoute)}</Fragment>

    // Part 3 - Cleaner Code Splitting
    <Fragment>{Part3(route, setRoute)}</Fragment>
  );
};

export default App;
