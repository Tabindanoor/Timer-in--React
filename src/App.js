import logo from './logo.svg';
import './App.css';

function App() {
  const format =(time)=>{
    const hour = format(time/60/60%24)
    const minutes = format(time/60%60)
    const seconds = format(time%60)

    hour = hour<10 ? 0 + hour : hour;
    minutes = minutes <10? '0' + minutes: minutes ;
    seconds = seconds <10? '0' + seconds: seconds ;

    return `${hour}:${minutes}:${seconds}`

  }
  return (
    <div className="App">
      <div className="stopwatch">
        <p>Timer</p>
        <div>
          <button>Reset</button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default App;
