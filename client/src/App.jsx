import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';


import GroceryList from './pages/GroceryList';
import GroceryPrivateRoute from './components/GroceryPrivateRoute';
import CreateGroceryList from './pages/CreateGroceryList';
import UpdateGroceryList from './pages/UpdateGroceryList';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/grocery-list' element={<GroceryList />} />
        <Route path='/create-grocery-list' element={<CreateGroceryList />} />
        <Route path='/update-grocery-list/:id' element={<UpdateGroceryList />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        
        

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>

        <Route element={<GroceryPrivateRoute />}>
          <Route path='/grocery-list' element={<GroceryList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
