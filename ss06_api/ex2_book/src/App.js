import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import BookList from "./components/book/BookList";
import BookCreate from "./components/book/BookCreate";
import BookUpdate from "./components/book/BookUpdate";

function App() {
  return (
      <Routes>
        <Route path="/list" element={<BookList/>}></Route>
        <Route path="/create" element={<BookCreate/>}></Route>
          <Route path="/update/:id" element={<BookUpdate/>}/>
        {/*<Route path="/update/:id" element={<BookUpdate/>}></Route>*/}
        {/*<Route path="*" element={<NotFound/>}></Route>*/}
      </Routes>
  );
}

export default App;
