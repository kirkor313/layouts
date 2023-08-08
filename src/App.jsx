import './App.css';
import { Store } from './components/Store/Store';
import data from './data/products.json';

function App() {
  return (
    <>
    <Store products = { data } />
    </>
  );
}

export default App;
