
import { useState } from "react";

function Campo(){

    const [text, setText] = useState("sou useState")
    const [inputText, setInputText]= useState("")

    function Clicou(){
        setText(inputText);
    }

    return (
        <div>
            <h1> {text}</h1>
            <input value={inputText} onChange={(e) => { setInputText(e.target.value)}} type="text"/>
                <button onClick={() => { setText("mudei texto")}}>mudou</button>
                <button onClick={Clicou}>Clicou ccc</button>

        </div>
    )
}

export default Campo