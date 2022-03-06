import "./App.scss";
import "./Mobile.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "../_components/Layout/Layout";
import { Bundles } from "./Bundles/Bundles";
import CustomAdapter from "../_services/MockAdapter/CustomAdapter";

const App = () => {
  return (
    <Router>
      <CustomAdapter />
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
