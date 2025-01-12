import './App.css';
import Login from './pages/login';
import Editor from './pages/editor';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>

    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          success:{
            theme:{
              primary: 'chartreuse',
            },
          },
        }}
>
      </Toaster>
    </div>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/editor/:roomId' element={<Editor/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
