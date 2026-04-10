import React, { useState } from "react";

function ObjectList() {
    const [students, setStudents] = useState([
        {
            id: 1,
            firstName: "egzon",
            lastName: "uka",
        },
        {
            id: 2,
            firstName: "filani",
            lastName: "uka",
        },
        {
            id: 3,
            firstName: "fisteku",
            lastName: "uka",
        }
    ]);
    const [show, setShow] = useState(true);
    const [isLineThrough, setIsLineThrough] = useState(false); 
    console.log(students);
    const handleLineThrough = () => {
        setIsLineThrough(!isLineThrough);
    }
    
    return (
        <div>
            <button onClick={()=>setShow(!show)}>{show ? "hide": "show" }</button>
            <ul>
                { show &&
                    students.map((student) => (
                        <li
                            style={{ textDecoration: isLineThrough ? "line-through" : "none" }}
                            onClick={handleLineThrough} key={student.id}>{student.firstName}</li>
                 ))
                }
            </ul>    
        </div>
  );
}

export default ObjectList;
