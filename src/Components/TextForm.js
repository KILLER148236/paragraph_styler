import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text,setText] = useState("type here");

  function ReverseString(str) {
      
    // Check input
    if(!str || str.length < 2 ||
            typeof str!== 'string') {
        return 'Not valid';
    }
      
    // Take empty array revArray
    const revArray = [];
    const length = str.length - 1;
      
    // Looping from the end
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
      
    // Joining the array elements
    return revArray.join('');
}
  const reverse=()=>{
    let str=ReverseString(text);
    setText(str);
  }

  const handle_lo_click=()=>{

    //console.log("lowercase button was clicked");
    let checklo=text.toLowerCase();
    setText(checklo);
  }

  const handle_empty_click=()=>{
    //console.log("text area empty");

    let newText = text.replace(text,"");
    setText(newText);
  }

  const handle_up_click=()=>{
    //console.log("uppercase button was clicked");
    // setText("you have updated the text area")
    let check=text.toUpperCase();
    setText(check);
  }
  const handleonchange=(event)=>{
    //console.log("text area was changed");
    setText(event.target.value);
  }
 
  const [mycolor, setmycolor] = useState({
    color:'black',
    backgroundColor:'white',
  })


  const [btntxt, setbtntxt] = useState("Enable dark mode")
  const toggleFunction=()=>{
    if(mycolor.backgroundColor==='white'){
      setmycolor({
        color:'white',
        backgroundColor:'black'
      })
      setbtntxt("Enable light mode")
    }else{
      setmycolor({
        color:'black',
        backgroundColor:'white'
      })
      setbtntxt("Enable dark mode")
    }
  }

  return (
    <>
      <div className='container my-3' style={mycolor} >
        <div className="mb-3">
         <h1> <label htmlFor="exampleFormControlInput1" className="form-label">{props.your_name}</label></h1>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
        </div>
        <div className="mb-3" style={mycolor}>
          <h1><label htmlFor="exampleFormControlTextarea1" className="form-label">{props.enter_text_here}</label></h1>
          <textarea className="form-control" style={mycolor} value={text} id="exampleFormControlTextarea1" rows="10" onChange={handleonchange}></textarea>
        </div>
        <button className="btn btn-success mx-2 my-2" onClick={handle_up_click}>Convert To UpperCase</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handle_lo_click}>Convert To lowerCase</button>
        <button className="btn btn-warning mx-2 my-2" onClick={handle_empty_click}>Empty the Workspace Area</button>
        <button className="btn btn-primary mx-2 my-2" onClick={reverse}>Reverse your text</button>
        <button className="btn btn-info mx-2 my-2" onClick={toggleFunction}>{btntxt}</button>
      </div>
      <div className="container my-2">
        <h1>
          Your Text Summary:
        </h1>
        <p>
          Words = <b>{text.split(" ").length-1}</b> and Characters =<b> {text.length}</b>
        </p>
        <p>
          Total Time To Read=<b>{(text.split(" ").length-1)*0.008*60}</b> seconds.
        </p>
        <h1>
          Preview
        </h1>
        <p>
          {text}
        </p>
      </div>
    </>
  )
}
TextForm.propTypes = {
  your_name: PropTypes.string,
  enter_text_here: PropTypes.string
}
TextForm.defaultProps={
  your_name: "Write your name here",
  enter_text_here:"Enter text here"
}
