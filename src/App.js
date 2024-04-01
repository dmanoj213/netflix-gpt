
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import appStore from './utils/appStore';

function App() 
{
  console.log(process.env);
  return (
    <div className="App">
      <Provider store={appStore}>
        <Body/>
      </Provider>
      
    </div>
  );
}

export default App;
