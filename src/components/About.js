//Enable Dark mode  

// import React,{useState} from "react";
import React from 'react'

export default function About(props) {

// const [myStyle, setmyStyle] = useState({
//     color:'white',
//     backgroundColor:'#212529'
//   })

// const [btnText, setbtnText] = useState("Enable Light Mode")

// const toggleStyle=()=>{
//     if(myStyle.color==='white'){
//         setmyStyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setbtnText("Enable Dark Mode")
//     }
//     else{
//         setmyStyle({
//             color:'white',
//             backgroundColor:'#212529'
//         })
//         setbtnText("Enable Light Mode")
//         }
   
// }
  return (
    
    <div className="container" >
      <h2 className="my-4">About Us</h2>  
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              // style={myStyle}
              style={{backgroundColor:props.mode==='dark'?'#212529':'#F8F9FA', color:props.mode==='dark'?'#F8F9FA':'#212529' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            style={{backgroundColor:props.mode==='dark'?'#212529':'#F8F9FA', color:props.mode==='dark'?'#F8F9FA':'#212529' }}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
           
              <strong>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              // style={myStyle}
              style={{backgroundColor:props.mode==='dark'?'#212529':'#F8F9FA', color:props.mode==='dark'?'#F8F9FA':'#212529' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            style={{backgroundColor:props.mode==='dark'?'#212529':'#F8F9FA', color:props.mode==='dark'?'#F8F9FA':'#212529' }}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              <strong>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              // style={myStyle}
              style={{backgroundColor:props.mode==='dark'?'#212529':'#F8F9FA', color:props.mode==='dark'?'#F8F9FA':'#212529' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            style={{backgroundColor:props.mode==='dark'?'#212529':'#F8F9FA', color:props.mode==='dark'?'#F8F9FA':'#212529' }}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              <strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong> 
            </div>
          </div>
        </div>
      </div>
      {/* <div>
      <button type="button" className="btn btn-secondary my-3" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
  );
}
