
import './App.css';
import Home from './page/Home';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route,Routes,Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
         <Home/>
      </Provider>
    
    </div>
  );
}

export default App;
