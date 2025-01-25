import logo from './logo.svg';
import './App.css';
import { Contador } from './components/contador';
import { ContadorMejorado } from './components/contadorMejorado';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ContadorRedux } from './redux/components/contador';

function App() {
  return (
    <div>
      <Provider store={store}>   {/* EN REDUX TODOS LOS COMPONENTES QUE TRABAJEN CON ESTADOS GLOBALES, DEBEN IR ENVUELTOS POR LA ETIQUETA <Provider> PARA QUE TODOS TENGAN ACCESO AL STORE*/} 
      
        <h1>useReducer y Redux</h1>
        <hr></hr>
        <ContadorRedux></ContadorRedux>
      
      </Provider>
      <hr></hr>
      <Contador></Contador>
      <ContadorMejorado></ContadorMejorado>
    </div>
  );
}

export default App;
