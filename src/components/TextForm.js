import React,{useState} from "react";


export default function TextForm(props) {
    
    const handleWhiteSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" ")) 
        props.showAlert("WhiteSpaces have now b!","success")
    }
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Text converted to uppercase!","success")
    }

    const handleLoClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Text converted to lowercase!","success")
    }

    const handleclearClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=""
        setText(newText)
        props.showAlert("Text cleared !","success")
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied !","success");
    }

    const speak=()=>{
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("You heard your text !","success")
    }

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value)//value of text can be updated
    }

    const [text, setText] = useState("Enter your text here");//hooks //text is given value enter your.... and text will be updated by setText
    
  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3" >
        <textarea className="form-control" id="myBox" rows="8" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#212529':'#F8F9FA', color:props.mode==='dark'?'#F8F9FA':'#212529' }}
        ></textarea>   
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2" onClick={handleclearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2" onClick={speak}>Speak</button>
      <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2" onClick={handleCopy}>Copy Text</button> 
      <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2" onClick={handleWhiteSpaces}>Remove WhiteSpaces</button> 
    </div>

    <div className="container my-3" >
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p> 
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0})} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"} </p>
    </div>
    
    </>
  );
}
