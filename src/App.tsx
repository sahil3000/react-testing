import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/Application';
import { AppProviders } from './provider/AppProviders';
import MuiMode from './components/mui/MuiMode';

function App() {
  return (
    <div className="App">
      {/* <Application/> */}
      <AppProviders>
        <MuiMode/>
      </AppProviders>
    </div>
  );
}

export default App;
