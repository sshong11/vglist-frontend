import './App.css';
import Main from './pages/Main';
import {Route} from "react-router-dom"

function App(props) {
  return (
    <div className="App">
      <Route path="/" component={Main} />
    </div>
  );
}

export default App;
