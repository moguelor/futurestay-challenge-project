import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LayoutRoute } from "@hocs";
import { AdminLayout } from "@components/layouts";
import * as dashboard from "./dashboard";

import { NotFoundPage } from "@components";

function App() {
  return (
    <Router>
      <Switch>
        <LayoutRoute
          exact
          path="/dashboard"
          component={dashboard.Container}
          layout={AdminLayout}
        />
        <LayoutRoute
          component={NotFoundPage}
        />
      </Switch>
    </Router>
  );
}

export default App;
