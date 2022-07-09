import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Address from './pages/address/Address';
import Homepage from './pages/homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<MainLayout />}>
                <Route index element = {<Homepage />} />
                <Route path='address' element = {<Address />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
