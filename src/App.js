import DrumPads from './components/drumPads';
import './App.css';
import {
  heater1,
  heater2, 
  heater3, 
  heater4, 
  clap, 
  open,   
  kickN, 
  kick, 
  close
} from './midia/index';
import Display from './components/display';
import { useState } from 'react';

function App() { 
  const [currentAudio, setCurrentAudio] = useState();

  return (
    <div className="App" >
      <h1 className='app-title'>Drum Machine</h1>
      <div className="drum-box" id='drum-machine'> 
        <Display currentAudio={currentAudio}></Display>  
        <div className='btn'>
          <div className='row'>
            <DrumPads 
              name='Q' 
              audio={heater1}
              id='heater-1'
              idAudio='Q'
              setCurrentAudio={setCurrentAudio}
            />
            <DrumPads 
              name='W'
              audio={heater2}
              id='heater-2'
              idAudio='W'
              setCurrentAudio={setCurrentAudio}
            />
            <DrumPads 
              name='E'
              audio={heater3}
              id='heater-3'
              idAudio='E'
              setCurrentAudio={setCurrentAudio}
            />
          </div>
          <div className='row'>
            <DrumPads 
              name='A'
              audio={heater4}
              id='heater-4'
              idAudio='A'
              setCurrentAudio={setCurrentAudio}
            />
            <DrumPads 
              name='S'
              audio={clap}
              id='clap'
              idAudio='S'
              setCurrentAudio={setCurrentAudio}
            />
            <DrumPads 
              name='D'
              audio={open}
              id='open'
              idAudio='D'
              setCurrentAudio={setCurrentAudio}
            />
          </div>
          <div className='row'>
            <DrumPads 
              name='Z'
              audio={kickN}
              id="kick-n'-hat"
              idAudio='Z'
              setCurrentAudio={setCurrentAudio}
            />
            <DrumPads 
              name='X'
              audio={kick}
              id='kick'
              idAudio='X'
              setCurrentAudio={setCurrentAudio}
            />
            <DrumPads 
              name='C'
              audio={close}
              id='close'
              idAudio='C'
              setCurrentAudio={setCurrentAudio}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
