import logo from './logo.svg';
import './App.css';
import UserList from "./components/UserList";
import {useSelector} from "react-redux";
import store from "./redux/Store";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    // const users=useSelector(store=>store.users)
  return (
    <>
      <UserList/>
        <ToastContainer/>
    </>
  );
}

export default App;
