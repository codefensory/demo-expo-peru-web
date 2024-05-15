import Router, { Route } from "preact-router";
import { SplashScreen } from "./screens/SplashScreen";
import { MainMenu } from "./screens/MainMenu";
import { GeneralScreen } from "./screens/GeneralScreen";
import { ProgramScreen } from "./screens/ProgramScreen";
import { ActivitiesScreen } from "./screens/ActivitiesScreen";
import { ActivityDetailScreen } from "./screens/ActivityDetailScreen";
import { ProviderGuideScreen } from "./screens/ProvidersGuideScreen";
import { ExpositorsScreen } from "./screens/ExpositorsScreen";

const SplitterByTypeRoute = () => {
  return (
    <div>
      <Router>
        <Route path="/:appType/" component={MainMenu} />
        <Route path="/:appType/general" component={GeneralScreen} />
        <Route path="/:appType/program" component={ProgramScreen} />
        <Route path="/:appType/activities" component={ActivitiesScreen} />
        <Route path="/:appType/activities/:id" component={ActivityDetailScreen} />
        <Route path="/:appType/guide" component={ProviderGuideScreen} />
        <Route path="/:appType/expositors" component={ExpositorsScreen} />
      </Router>
    </div>
  )
}

export function App() {
  return (
    <Router>
      <Route path="/" component={SplashScreen} />
      <Route path="/:appType*" component={SplitterByTypeRoute} />
    </Router>
  )
}
