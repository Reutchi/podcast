import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Contact, Episodes, MainPage, Page404,About} from '../pages/index'
import AppFooter from "../appFooter/AppFooter";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import {AuthContextProvider} from "../../context/AuthContext";


export default App;

function App() {

    return (
        <AuthContextProvider>
        <BrowserRouter>
                <AppHeader/>
                <div className="App">
                    <main>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='/episodes' element={<Episodes/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/contact' element={<Contact/>}/>
                            <Route path="*" element={<Page404 />} />
                                <Route path='/signup' element={<Signup />} />
                                <Route path='/login' element={<Login/>} />
                        </Routes>
                    </main>
                </div>
                <AppFooter/>
            </BrowserRouter>
            </AuthContextProvider>
            );
}
