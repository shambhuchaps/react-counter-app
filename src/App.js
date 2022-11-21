import React, {useState} from 'react'

function App() {
  const [count, setcount] = useState(0);

  const Increment = ()=>{
    setcount(count+1);
  }
  const Decrement = ()=>{
    setcount(count-1);
  }
  const Reset = ()=>{
    setcount(0);
  }
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className='btn btn-success mx-3' onClick={Increment}>Increment</button>    
            <button className='btn btn-secondary mx-3' onClick={Decrement} disabled={count===0}>Decrement</button>   
            <button className='btn btn-danger mx-3' onClick={Reset} disabled={count===0}>Reset</button>                     
            
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
