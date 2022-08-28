import React from 'react';
import './NavBar.css';

function ItemCount({stock, initial}) {
    const [counter, setCounter] = React.useState(0);

    const handlerCounterUp = () => {
        if(counter<stock){
            setCounter(counter + 1);
        }
    };

    const handlerCounterDown = () => {
        if(initial<counter){
            setCounter(counter - 1);
        }
    };

    return (
        <div className="App itemCount">
          <button onClick={handlerCounterDown} type="button" className="btn btn-dark">-</button>
          <p>{counter}</p>
          <button onClick={handlerCounterUp} type="button" className="btn btn-dark">+</button>
        </div>
      );
}

export default ItemCount