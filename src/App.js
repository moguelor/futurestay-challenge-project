import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as dashboard from "./dashboard";

import { NotFoundPage } from "./common/components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/*" component={dashboard.Container} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
