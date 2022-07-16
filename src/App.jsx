import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Address from './pages/Address/Address';
import Homepage from './pages/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
import TransactionPage from './pages/TransactionPage/TransactionPage';
import AccountPage from './pages/Account/AccountPage';
import TokenPage from './pages/TokenPage/TokenPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<MainLayout />}>
                <Route index element = {<Homepage />} />
                <Route path='address' element = {<Address />}/>
                <Route path = 'transaction/:id' element = {<TransactionPage />} />
                <Route path='account/:acc' element = {<AccountPage />} />
                <Route path='token/:id' element = {<TokenPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
