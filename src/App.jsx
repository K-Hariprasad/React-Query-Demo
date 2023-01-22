import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Characters from "./components/Characters";
import {ReactQueryDevtools} from 'react-query/devtools'
import Character from "./components/Character";

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />
          <section className="app-body-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/character/:id" element={<Character />} />
            </Routes>
          </section>
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
