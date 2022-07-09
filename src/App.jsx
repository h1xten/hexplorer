import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RequireAddress from './hoc/RequireAddress';
import MainLayout from './layout/MainLayout';
import Address from './pages/address/Address';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<MainLayout />}>
                <Route index element = {
                    <RequireAddress>
                        <Homepage />
                    </RequireAddress>
                } />

                <Route path='address' element = {<Address />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
