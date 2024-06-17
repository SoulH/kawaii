import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/default'
import Home from './pages/home';
import './App.css';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<DefaultLayout/>}>
                        <Route index element={<Home/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;