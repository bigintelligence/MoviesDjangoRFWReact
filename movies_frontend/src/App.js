import './App.css';
import { Provider } from 'react-redux';
import store from "./store";
import Home from './routers/home';
import AddMovie from './routers/addmovie';
import Movies from './routers/movies';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/addmovie" element={<AddMovie/>} />
            <Route exact path="/movies" element={<Movies/>} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
