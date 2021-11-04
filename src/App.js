import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Content />
          <Footer />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/*">
          <p className="errorPage">404</p>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
