import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text, setText] = useState("");

  function ReverseString(str) {

    // Check input
   

    // Take empty array revArray
    const revArray = [];
    const length = str.length - 1;

    // Looping from the end
    for (let i = length; i >= 0; i--) {
      revArray.push(str[i]);
    }

    // Joining the array elements
    return revArray.join('');
  }
  const reverse = () => {
    let str = ReverseString(text);
    setText(str);
    if(text.length>0){
    props.alert("Text reversed!","warning")
  }else{
    props.alert("Text area is empty!! Enter some text","danger")
  }
  }

  const handle_lo_click = () => {

    //console.log("lowercase button was clicked");
    let checklo = text.toLowerCase();
    setText(checklo);
    if(text.length>0){
    props.alert("Converted To LowerCase!","warning")
  }else{
    props.alert("Text area is empty!! Enter some text","danger")
  }
  }

  const handle_empty_click = () => {
    //console.log("text area empty");

    let newText = text.replace(text, "");
    setText(newText);
    if(text.length>0){
    props.alert("Text area set to empty","warning")
  }else{
    props.alert("Text area is empty!! Enter some text","danger")
  }
  }

  const handle_up_click = () => {
    //console.log("uppercase button was clicked");
    // setText("you have updated the text area")
    let check = text.toUpperCase();
    setText(check);
    if(text.length>0){
    props.alert("Converted To UpperCase!","warning")
  }else{
    props.alert("Text area is empty!! Enter some text","danger")
  }
  }
  const handleonchange = (event) => {
    //console.log("text area was changed");
    setText(event.target.value);
  }





  const handleExtraSpaces = () => {

    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    if(text.length>0){
    props.alert("Extra Spaces handled!","success")
  }else{
    props.alert("Text area is empty!! Enter some text","danger")
  }
  }

  return (
    <>
      <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "black" }} >
        <div className="mb-3">
          <h1> <label htmlFor="exampleFormControlInput1" className="form-label">{props.your_name}</label></h1>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
        </div>
        <div className="mb-3" style={{ color: props.mode === "light" ? "dark" : "light" }} >
          <h1><label htmlFor="exampleFormControlTextarea1" className="form-label">{props.enter_text_here}</label></h1>
          <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? "white" : "#121038", color: props.mode === "dark" ? "white" : "black" }} placeholder="Type here"  value={text}  rows="10" onChange={handleonchange}></textarea>
        </div>
        <button className="btn btn-success mx-2 my-2" onClick={handle_up_click}>Convert To UpperCase</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handle_lo_click}>Convert To lowerCase</button>
        <button className="btn btn-warning mx-2 my-2" onClick={handle_empty_click}>Empty the Workspace Area</button>
        <button className="btn btn-primary mx-2 my-2" onClick={reverse}>Reverse your text</button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra space</button>


      </div>
      <div className="container my-2" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>
          Your Text Summary:
        </h1>
        <p>
          Words =<strong>{text.split(/\s+/).filter((element)=>{return element!==""}).length}</strong> and Characters =<b> {text.length}</b>
        </p>
        <p>
          Total Time To Read=<b>{(text.length) * 0.0008 * 60}</b> seconds.
        </p>
        <h1>
          Preview
        </h1>
        <p>
          {text.length > 0 ? text : "Enter above in the box to preview here."}
        </p>
      </div>
    </>
  )
}
TextForm.propTypes = {
  your_name: PropTypes.string,
  enter_text_here: PropTypes.string
}
TextForm.defaultProps = {
  your_name: "Write your name here",
  enter_text_here: "Enter text here"
}
