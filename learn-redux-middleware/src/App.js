import React from "react";
import { Route } from "react-router-dom";

import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div>
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/:id" component={PostPage} />
    </div>
  );
}

export default App;
