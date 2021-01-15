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
      background: "#fafafa",
      card: "#FFF",
      surface: "#fff",
      text: "#2a2c37",
      textMenu: "#55586F",
      textMenuActive: "#4852aa",
      backgroundMenuActive: "#edeef7",
      backgroundToggle: "#55586F",
      textMark: "#9A9BA9",
      backgroundLongCard: "#edeef7"

    },
  },
  dark: {
    colors: {
      background: "#55586F",
      card: "#79798C",
      surface: "#2A2C37",
      text: "#fff",
      textMenu: "#fff",
      textMenuActive: "#4852aa",
      backgroundMenuActive: "#9A9BA9",
      backgroundToggle: "#fafafa",
      textMark: "#FFF",
      backgroundLongCard: "#BCBCC5"
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
            handleToggleTheme={toggleTheme}
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
