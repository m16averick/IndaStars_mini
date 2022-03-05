import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "../_components/Layout/Layout";
import { Bundles } from "./Bundles/Bundles";

const App = () => {
  return (
    <Router>
      <Layout>
          <Switch>
            <Route path="/">
              <Bundles />
            </Route>
          </Switch>
      </Layout>
    </Router>
  );
};

export default App;
