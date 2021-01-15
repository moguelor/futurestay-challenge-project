import { HashRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LayoutRoute } from "@hocs";
import { useThemeMode } from "@hooks";
import { NotFoundPage, GlobalStyle, CommingSoonPage } from "@components";
import { AdminLayout } from "@components/layouts";

/** Pages */
import * as dashboard from "./dashboard";

/** Theme */
const themes = {
  default: {
    colors: {
      background: "#fafafa",
      card: "#FFF",
      surface: "#fff",
      text: "#2a2c37",
      textMenu: "#55586F",
      textMenuActive: "#4852aa",
      textMark: "#9A9BA9",
      colorTextCompany: "#79798c",
      backgroundMenuActive: "#edeef7",
      backgroundToggle: "#4852AA",
      backgroundLongCard: "#edeef7",
    },
  },
  dark: {
    colors: {
      background: "#55586f",
      card: "#79798c",
      surface: "#2a2c37",
      text: "#fff",
      textMenu: "#fff",
      textMark: "#fff",
      colorTextCompany: "#ff",
      textMenuActive: "#4852aa",
      backgroundMenuActive: "#9a9ba9",
      backgroundToggle: "#4852aa",
      backgroundLongCard: "#bcbcc5",
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
            path="/"
            component={dashboard.Container}
            layout={AdminLayout}
            handleToggleTheme={toggleTheme}
          />
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
            handleToggleTheme={toggleTheme}
          />
          <LayoutRoute
            exact
            path="/rateboard"
            component={CommingSoonPage}
            layout={AdminLayout}
            handleToggleTheme={toggleTheme}
          />
          <LayoutRoute
            exact
            path="/connections"
            component={CommingSoonPage}
            layout={AdminLayout}
            handleToggleTheme={toggleTheme}
          />
          <LayoutRoute
            exact
            path="/reservations"
            component={CommingSoonPage}
            layout={AdminLayout}
            handleToggleTheme={toggleTheme}
          />
          <LayoutRoute
            exact
            path="/analythics"
            component={CommingSoonPage}
            layout={AdminLayout}
            handleToggleTheme={toggleTheme}
          />
          <LayoutRoute
            exact
            path="/financials"
            component={CommingSoonPage}
            layout={AdminLayout}
            handleToggleTheme={toggleTheme}
          />
          <LayoutRoute
            exact
            path="/website"
            component={CommingSoonPage}
            layout={AdminLayout}
            handleToggleTheme={toggleTheme}
          />
          <LayoutRoute component={NotFoundPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
