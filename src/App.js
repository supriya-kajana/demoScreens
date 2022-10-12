import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';
import MainLayout from './FirstScreen/MainLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Navigation />
      </header>
      <div className='App-mainLayout'>
      <MainLayout />
      </div>
    </div>
  );
}

export default App;
