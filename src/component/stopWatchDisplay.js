function StopWatchDisplay(props){

  return(

    <div style={{'background-color':'green', 'opacity':'0.3'}}>
  <h2>

    {props.tim.hrs?props.tim.hrs: 0} : 
    {props.tim.min?props.tim.min: 0}:
    {props.tim.seconds?props.tim.seconds: 0}:
    {props.tim.milli?props.tim.milli: 0}
  </h2>

    </div>
  );



}

export default StopWatchDisplay;