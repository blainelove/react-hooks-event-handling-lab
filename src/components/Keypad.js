// Code Keypad Component Here

function Keypad(){
    function handleClick(){
        console.log(`${number}`)
    }

    return <div>
      <break><button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <break><button onClick={() => handleClick(3)}>3</button></break>
      <button onClick={() => handleClick(5)}>4</button>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(6)}>6</button></break>
      <button onClick={() => handleClick(7)}>7</button>
      <button onClick={() => handleClick(8)}>8</button>
      <button onClick={() => handleClick(9)}>9</button>
    

    
    </div>


}



export default Keypad;