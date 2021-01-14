import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LayoutRoute } from "@hocs";
import { useThemeMode } from "@hooks";
import { NotFoundPage, GlobalStyle, CommingSoonPage } from "@components";
import { AdminLayout } from "@components/layouts";

/** Pages */
import * as dashboard from "./dashboard";

const themes = {
  default: {
    colors: {
      background: "#FAFAFA",
      backgroundMenu: "#FFF",
      text: "#2A2C37",
      textMenu: "#55586F",
      textMenuActive: "#4852aa",
      backgroundMenuActive: "#edeef7",

    },
  },
  dark: {
    colors: {
      background: "",
    },
  },
};

const App = () => {
  const [theme, toggleTheme] = useThemeMode();

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Router>
        <Switch>
          <LayoutRoute
            exact
            path="/dashboard"
            component={dashboard.Container}
            layout={AdminLayout}
          />
          <LayoutRoute
            exact
            path="/properties"
            component={CommingSoonPage}
            layout={AdminLayout}
          />
          <LayoutRoute
            exact
            path="/rateboard"
            component={CommingSoonPage}
            layout={AdminLayout}
          />
          <LayoutRoute
            exact
            path="/connections"
            component={CommingSoonPage}
            layout={AdminLayout}
          />
          <LayoutRoute
            exact
            path="/reservations"
            component={CommingSoonPage}
            layout={AdminLayout}
          />
          <LayoutRoute
            exact
            path="/analythics"
            component={CommingSoonPage}
            layout={AdminLayout}
          />
          <LayoutRoute
            exact
            path="/financials"
            component={CommingSoonPage}
            layout={AdminLayout}
          />
          <LayoutRoute
            exact
            path="/website"
            component={CommingSoonPage}
            layout={AdminLayout}
          />
          <LayoutRoute component={NotFoundPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
