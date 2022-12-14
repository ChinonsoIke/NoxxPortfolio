import Home from "./components/pages/home/home.component";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BlogIndex from "./components/pages/blog-index/blog-index.component";
import NavBar from "./components/molecules/navbar/navbar.component";
import BlogDetail from "./components/pages/blog-detail/blog-detail.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/blog" exact element={<BlogIndex/>} />
          <Route path="/blog/:id"  element={<BlogDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
