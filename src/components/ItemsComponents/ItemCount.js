import React from 'react';
import './Item.css';

function ItemCount({stock, initial, onAdd}) {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <div className="App itemCount">
                <button onClick={() => setCounter(counter - 1)} disabled={counter === initial} type="button" className="btn btn-dark">-</button>
                <p>{counter}</p>
                <button onClick={() => setCounter(counter + 1)} disabled={counter === stock} type="button" className="btn btn-dark">+</button>
            </div>
            <button onClick = { () => onAdd(counter) } type="button" className="btn btn-dark">Agregar</button>
        </div>
      );
}

export default ItemCount