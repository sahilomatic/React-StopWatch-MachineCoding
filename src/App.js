import "./styles.css";
import StopWatchDisplay from './component/stopWatchDisplay';
import {useState} from 'react';
export default function App() {
  const [tim, setTime]= useState({
      'hrs':0,
      'min':0,
      'seconds':0,
      'milli': 0

  });

  const [interv,setInterv] = useState();
  function start(){


    run();

    setInterv(setInterval(run,100));

  }

  function pause(){

    clearInterval(interv);
  }

  function reset(){
    clearInterval(interv);
    setTime({
      'hrs':0,
      'min':0,
      'seconds':0,
      'milli': 0

  });

  }

  var {hrs,min, seconds, milli} = tim;
  function run(){
    console.log('run');
    

    if(min>60){
      hrs= hrs+1;
      min = 0;
    }
    if(seconds>60){
      min = min +1;
      seconds = 0;
    }

    if(milli> 60){
      seconds = seconds +1;
      milli = 0
    }

    milli = milli + 1;

    setTime({
      hrs:hrs, min: min , seconds: seconds, milli : milli
    });
  }
  
  return (
    <div className="App">
      <StopWatchDisplay tim = {tim}/>

      <div style={{'background-color':'tomato'}}>

        <button style={{'margin':'3px'}} onClick={()=>{start();}}>Start</button>
        <button style={{'margin':'3px'}} onClick={()=>{pause();}}>Stop</button>
        <button style={{'margin':'3px'}} onClick={()=>{reset();}}>Reset</button>
      </div>
      
    </div>
  );
}
