import './App.css';
import Zuikis from './components/Zuikis';
import Tekstas from './components/Tekstas';
import ZebraiIrBebrai from './components/Zebrai';
import DuTekstai from './components/DuTekstai';
import SpalvotiTekstai from './components/SpalvotiTekstai';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Zuikis></Zuikis>
        <Tekstas text='bet koks tekstas'></Tekstas>
        <ZebraiIrBebrai sk={0}></ZebraiIrBebrai>
        <ZebraiIrBebrai sk={1}></ZebraiIrBebrai>
        <ZebraiIrBebrai sk={2}></ZebraiIrBebrai>
        <DuTekstai text1='Didelis tekstas' text2='Mazas tekstas'></DuTekstai>
        <SpalvotiTekstai text1='Spalvotas didelis tektas' text2='Spalvotas mazas tekstas' spalva='violet'></SpalvotiTekstai>
      </header>
    </div>
  );
}

export default App;
