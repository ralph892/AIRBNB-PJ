import { Fragment } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { publicRoutes } from "./routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

import './'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout == null) Layout = Fragment;
            let Page = route.component;
            return (
              <Route key={index} path={route.path} element={<Layout><Page></Page></Layout>}></Route>
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
