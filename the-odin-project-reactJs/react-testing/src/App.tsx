import React from 'react';
import './App.css';
import { AppProviders } from './components/providers/AppProviders';
import {MuiMode} from './components/mui/MuiMode'

function App() {
  return ( 
    <div className="App">
      <AppProviders>
        <div className='App'>
          <MuiMode />
        </div>
      </AppProviders>
    </div>
  );
}

export default App;
