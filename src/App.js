import './App.css';
import Pricecard from './components/price-card';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const freePrice = 0;
  const plusPrice = 9;
  const proPrice = 49;
  const freeFeature = [1,1,1,1,0,0,0,0];
  const plusFeature = [1,1,1,1,1,1,1,0];
  const proFeature = [1,1,1,1,1,1,1,1];
  return (
    <>
        <h1 className='text-center'>Price Card App</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Pricecard plan="FREE" price={freePrice} userCount="Single" feat={freeFeature} />
          </div>
          <div className='col-4'>
            <Pricecard plan="PLUS" price={plusPrice} userCount="5" feat={plusFeature} />
          </div>
          <div className='col-4'>
            <Pricecard plan="PRO" price={proPrice} userCount="Unlimited" feat={proFeature} />
          </div>
        </div>
      </div>
    </> 
  );
}

export default App;
