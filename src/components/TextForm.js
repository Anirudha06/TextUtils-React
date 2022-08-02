import React,{useState} from 'react'
export default function (props) {
    const handleUpClick = ()=>{
        // console.log("uppercase button clciked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase !","success")
    }
    const handleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase !","success")
    }   
    const handleClear= ()=>{
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared !","success")
    }
    const handleCopy= ()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To ClipBoard !","success")
        // alert("Copied the text: " + newText.value);
        // setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
    <>
    {/* <div class="form-check form-switch mx-3">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Dark Mode 
            </label>
          </div> */}
    <div className='container my-2'>
        <h3 style={{color: props.mode==='light'?'black':'white'}}>{props.title}</h3>
        <div className="mb-3">
            
        <textarea className="form-control" id="myBox" style={{color:props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'black' }} placeholder="Enter The Text Here" value={text} onChange={handleOnChange} rows="8"></textarea><br />

        <button className="btn btn-primary mx-2" style={{color:props.mode==='light'?'white':'white', backgroundColor: props.mode==='light'?'primary':'black' }} onClick={handleUpClick}>Convert to UpperCase</button> 

        <button className="btn btn-primary" style={{color:props.mode==='light'?'white':'white', backgroundColor: props.mode==='light'?'primary':'black' }} onClick={handleLoClick}>Convert to LowerCase</button>

        <button onClick={handleCopy} style={{color:props.mode==='light'?'white':'white', backgroundColor: props.mode==='light'?'primary':'black' }} className="btn btn-primary mx-2 "><i class="fa-solid fa-copy"></i> | Copy To ClipBoard </button>

        {/* <button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy To ClipBoard</button> */}

        <button style={{color:props.mode==='light'?'white':'white', backgroundColor: props.mode==='light'?'primary':'black' }} className="btn btn-warning mx-2" onClick={handleClear}>Clear</button>
        
        {/* <button class="btn btn-dark"><i class="fa fa-moon-o"></i> | Moon</button> */}
        </div>
        
    </div>
<div className="container my-2">
    <h2 style={{color: props.mode==='light'?'black':'white'}}>Your Text Summary</h2>
   <b><p style={{color: props.mode==='light'?'black':'white'}}>{text.split(' ').length -' ' } Words and {text.length} Charecters</p></b> 
   
    <p style={{color: props.mode==='light'?'black':'white'}}>Total time taken to read : {0.008* (text.split(" ").length-1)}</p>
    {/* <p>No of Sentences:{text.split('                              '.length) }</p> */}
</div>
    </>
  )
}