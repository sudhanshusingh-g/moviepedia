import { useEffect } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { Home } from "./pages/Home/Home";
import { Search } from "./pages/Search/Search";
import { Details } from "./pages/Details/Details";
import { Explore } from "./pages/Explore/Explore";
import {PageNotFound} from "./pages/404/PageNotFound";
import { Header } from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state)=>state.home);
  console.log(url);
  
  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search/:query" element={<Search/>}/>
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/explore/:mediaType" element={<Explore/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
