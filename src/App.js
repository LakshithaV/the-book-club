import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import Create from "./components/create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/books/:id">
              <BookDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
