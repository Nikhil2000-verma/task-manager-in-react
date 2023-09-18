import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Userlisting from './Component/Userlisting';
import Adduser from './Component/Adduser';
import Updateuser from './Component/Updateuser';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Header from './Component/Header';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            {/*<Route path='/' element={<Home></Home>}></Route>*/}
            <Route path='/' element={<Userlisting></Userlisting>}></Route>
            <Route path='/user/add' element={<Adduser></Adduser>}></Route>
            <Route path='/user/edit/:code' element={<Updateuser></Updateuser>}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer className="toast-position" position='bottom-right'></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
