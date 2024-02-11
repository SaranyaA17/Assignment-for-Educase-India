import './App.css';
import {  Route,  Routes } from 'react-router-dom';
import Home from './Component/Page/Home/Home';
import SigninNew from './Component/Page/SigninNew/SigninNew';
import Account from './Component/Page/Account/Account';
import SigninForm from './Component/Page/SigninForm/SigninForm';

function App() {
  return (
    <div className="App">
        
        <div className='App-sec-1'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/NewAccount' element={<SigninNew/>}/>
          <Route path='/Account' element={<Account/>}/>
          <Route path='/Login' element={<SigninForm/>}/>
        </Routes>
        
        </div>
    </div>
  );
}

export default App;
