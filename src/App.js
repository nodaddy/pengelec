import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [entered, setEntered] = useState(false);
  const [neenstaPosition, setNeenstaPosition] = useState(190);
  const [yodaPosition, setYodaPosition] = useState(300);
  const [winner, setWinner] = useState(null);
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'url(https://pbs.twi mg.com/media/Et-4wqeVoAAQYgz?format=jpg&name=4096x4096) no-repeat top',
      backgroundSize: 'cover'
    }}> 
      {
        winner && <div align="center">
           <br/>
          <br/>
          <br/>
          <br/>
          <iframe style={{width: '100vw'}} src="https://giphy.com/embed/QYLnzu4C3mT8rJ6hRL" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          <br/>
          <br/>
<br/>
          <br/>
          <div align="left" style={{fontSize: '14px', borderRadius: '15px', padding: '20px 30px', boxShadow: '1px 1px 5px 2px silver', width: '70vw'}}>
            <h2><span style={{color: 'goldenrod'}}>{winner}</span> <br/><span style={{color: 'grey'}}>is the winner of the elections</span></h2>  
            <br/> 
            Untill next elections, {winner} will take charge of the Mighty Penguin Army and {winner}'s decisions will be paramount! Over and out.
            <br/> 
            <br/>
            <br/>
            
          
          </div>
<br/>
<br/>
<br/>
          <div
            
            style={{border: '0px', padding: '10px 20px', position: 'relative'}}
            onClick={()=>{
              setEntered(true);
            }}>Now you can phutt!</div>
        </div>
      }
      {
        !entered && <div align="center">
          <br/>
          <br/>
          <br/>
          <br/>
          <iframe style={{width: '100vw'}} src="https://giphy.com/embed/QYLnzu4C3mT8rJ6hRL" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          <br/>
          <br/>
<br/>
          <br/>
          <div align="left" style={{fontSize: '14px', borderRadius: '15px', padding: '20px 30px', boxShadow: '1px 1px 5px 2px silver', width: '70vw'}}>
            Hewwo! I'm Bree,
            <br/>
            <br/>
            You are about to enter my polling booth, we have two candidates special candidates <b>Neensta</b> and <b> Yoda</b>. 
            May the right one win this time too!
            <br/>
            <br/>
            
          
          </div>
<br/>
<br/>
<br/>
          <button 
            
            style={{border: '0px', padding: '10px 20px', position: 'relative'}}
            onClick={()=>{
              setEntered(true);
            }}>Enter booth</button>
        </div>
      }
     {entered && !winner && <div

      style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: '100vh', width: '100vw'}}
      >
        <div style={{
          width: '50%',
          backgroundColor: 'rgb(255, 255, 255, 1)',
          borderRadius: '15px',
          paddingLeft: '15px',
          display: 'flex', flexDirection: 'row',
          transition: 'top 1s ease',
          top: `${neenstaPosition}px`,
          position: 'absolute',
          left: '50px'

        }}>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQjaNHJlPAHpBn_oHDO5uUnSEX4S1sqdSug&usqp=CAU"
          style={{
            width: '20vw',
            height: '20vw',
            borderRadius:'50%',
          }}
          ></img>
          &nbsp;
          &nbsp;
          <h4><span style={{fontWeight: '400'}}>Commandar</span><br/> Neensta</h4>
          
        </div>
        <div style={{
          width: '50%', 
          borderRadius: '15px',
          padding: '15px',
          display: 'flex', flexDirection: 'row',
          top: `${yodaPosition}px`,
          position: 'absolute',
          left: '50px',
          transition: 'top 1s ease'
        }}>
           <img src="https://static.vecteezy.com/system/resources/previews/005/559/915/original/cute-penguin-waving-hand-cartoon-icon-illustration-animal-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"
          style={{
            width: '20vw',
            height: '20vw',
            borderRadius:'50%'
          }}
          ></img>
          &nbsp;
          &nbsp;
          <h4><span style={{fontWeight: '400'}}>Private</span><br/> Yoda</h4>
          
        </div>
        
        <img 
        onClick={()=>{
          var counter = 0;
          var interval = setInterval(()=>{
            counter ++;
            var elecPosition = Math.random()*500;
            setNeenstaPosition(elecPosition);
            setYodaPosition(600 - elecPosition);
            if(counter > 12 && (elecPosition < 240 || elecPosition > 340)){
              clearInterval(interval);
              setTimeout(() => {
                if(elecPosition < (600 - elecPosition)){
                  setWinner('Commandar Neensta');
                } else {
                  setWinner('Private Yoda')
                }
              }, 2000);
            }
          }, 800)
          
        }}
        style={{
          position: 'absolute',
          right: '70px',
          bottom: '100px'
        }} src='https://img.icons8.com/?size=2x&id=tvig8PQDbp9d&format=png' />
      </div>}
       
</div>
  );
}

export default App;
