import React, {useState} from "react";

function NumberState() {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={() => { setCount(count - 1) }}>Descrase</button>
            {count}
        </>
  );
}

export default NumberState;
