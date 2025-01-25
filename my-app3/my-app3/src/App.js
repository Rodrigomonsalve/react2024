import logo from './logo.svg';
import './App.css';
import { Contador } from './components/contador';
import { Contador2 } from './components/contador2';
import { Contador3 } from './components/contador3';
import { Contador4 } from './components/contador4';

function App() {
  return (
    <div className="App">
      <h1>Memorizacion en React</h1>
      <hr></hr>
      <h2>Teoria</h2>
      <h3>
        <a href="https://legacy.reactjs.org/docs/react-api.html"
        target="_blank"
        rel="nonreferrer">
        memo
        </a>
      </h3>
      <Contador></Contador>
      <hr></hr>
      <Contador2></Contador2>
      <hr></hr>
      <Contador3></Contador3>
      <hr></hr>
      <Contador4></Contador4>
    </div>
  );
}

export default App;
