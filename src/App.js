import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home';
import Detail from './pages/detail'
import PostContextProvider from './context/postContext';
import Edit from './pages/edit';
function App() {
  return (
    <>
    <PostContextProvider>
      <Router>
        <Switch>
          <Route  exact path="/" component={Home} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route path="/:id" component={Detail} />
        </Switch>
        <ToastContainer />
      </Router>
    </PostContextProvider>
    </>
  );
}

export default App;
