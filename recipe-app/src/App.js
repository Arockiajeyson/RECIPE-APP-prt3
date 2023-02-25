
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Tostss} from './Tostss'
import LoginReci from './LoginReci';
import RegisterRec from './RegisterRec';
import Recipes from './Recipes';
import Home from './Home';
import Particular from './Particular';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Tostss>
          <Routes>
            <Route path='/' element={<LoginReci/>}/>
            <Route path='/register' element={<RegisterRec/>}/>
            <Route path='/home' element={<Home/>}/> 
            <Route path='/recip/:id' element={<Particular/>}/>
            <Route path='/create' element={<Recipes/>}/>
          </Routes>
        </Tostss>
      </BrowserRouter>
    </div>
  );
}

export default App;
