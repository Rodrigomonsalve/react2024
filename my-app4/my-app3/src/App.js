import logo from './logo.svg';
import './App.css';
import { MyPage } from './componentsSinContext/myPage';
import { MyPageContext } from './componentConContext/myPage';

function App() {
  return (
    <div>
      <h1>React context API</h1>
     {/*  <MyPage></MyPage> */}
     <MyPageContext></MyPageContext>
    </div>
  );
}

export default App;
