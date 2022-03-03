import { ToastProvider } from 'react-toast-notifications';
import { Route, Switch, Redirect } from 'react-router-dom';
// Components
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails/ProductDetails';
// Pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <ToastProvider placement='bottom-right'>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/product/:id' component={ProductDetails} />
        <Route path='/favorites' component={Favorites} />
      </Switch>
      <Redirect to='/home' />
    </ToastProvider>
  );
}

export default App;
