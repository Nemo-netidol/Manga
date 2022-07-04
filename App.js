import logo from './logo.svg';
import './App.css';
import { Header } from './components/header.js';
import { HomeLink } from './components/home';
import { Container } from './components/container';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeLink/>
      <Container/>
    </div>
  );
}

export default App;
