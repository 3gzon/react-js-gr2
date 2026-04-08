import React, { useState } from "react";

function BooleanState() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>
            {show && <p>show this content</p>}
        </>
  )
}

export default BooleanState;
