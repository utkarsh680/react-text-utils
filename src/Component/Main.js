import React, { useEffect, useState } from 'react'

export default function Main(props) {

    const [text,setText] = useState("");
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        // window.alert("Welcome to the My textUtils Software Page!");
        setTimeout(() => {
            setLoading(false);
          }, 2000);
    },[])


    // text = "hello text"; wrong way to update 
    // setText("Haan updated now!") correct way 


    const upperClickHandler = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerClickHandler = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearClickHandler = () =>{
        setText("");
    }


    const textHandler = (e)=>{
        setText(e.target.value);
    }

    if (loading) {
        return <div className="text-center">
            <img src='https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif' alt='loader'></img>
        </div>;
      }

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div>
            <textarea className='form-control' onChange={textHandler} value={text} rows="9"></textarea>
            <div className='container my-3'>
                <button className='btn btn-outline-primary mx-3' onClick={upperClickHandler}>Convert to UpperCase</button>
                <button className='btn btn-outline-success mx-3' onClick={lowerClickHandler}>Convert to LowerCase</button>
                <button className='btn btn-outline-warning mx-3' onClick={clearClickHandler}>Clear the TextArea</button>
            </div>
        </div>
      </div>
    </>
  )
}
