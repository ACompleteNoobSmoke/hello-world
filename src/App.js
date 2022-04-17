import logo from './logo.svg';
import Greet from './components/Greet';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClicked from './components/ClassClicked';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Message/>
      <Greet name="Osaretin"/>
      <Greet name="Victoria"/>
      <Greet name="Ade">
        <button>Press Button</button>
      </Greet>
      <Greet name="Boye"/>
      <Welcome name='Jackie Chan'/> 
      <Hello/> */}
      {/* <FunctionClick />
      <ClassClicked /> */}
      {/* <UserGreeting /> */}
    </div>
  );
}

export default App;
