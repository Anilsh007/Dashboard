import React, { useState, useEffect } from "react";

function Testpage({ name }) {
    const [api, setApi] = useState([]);
    const [abc, setAbc] = useState(false);

    const APIurl = "https://jsonplaceholder.typicode.com/users";

    // Using useEffect to fetch data on component mount

    useEffect(() => {
        fetch(APIurl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setApi(data);
            })
            .catch((err) => {
                console.log("Error fetching data:", err);
            });

    }, [abc]);

    // const loop = () => {
    //     let para = [];
    //     for (var i = 0; i < 10; i++) {
    //         para.push(<span key={i}>{i}</span>)
    //         console.log(i)
    //     }
    //     return para;
    // }

    //loop();

    const sendParent = () => {
        name("anil");
    }

    const [input, setInput] = useState('dfdf');

    const data = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Bob Brown' },
        { id: 5, name: 'Charlie Black' }
    ]

    const handleChange = (e)=>{
        setInput(e.target.value);
        console.log(setInput(e.target.value))
    }

    return (
        <>
            <button onClick={() => setAbc(!abc)}>{abc ? 'On' : 'Off'}</button>
            
            <ul>
                {
                    api.map((list) => <li key={list.id}>{list.name}</li>)
                }
            </ul>

            <button onClick={sendParent}>send</button>

            <input type="text" value={input} onChange={handleChange} />
        </>
    );
}

export default Testpage;
