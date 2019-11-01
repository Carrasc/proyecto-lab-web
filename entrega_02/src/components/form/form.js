import React, {useRef} from 'react';
import updateWord from '../../store/word/action';
import {connect} from "react-redux";

const Form = ({updateWord}) =>{
    const wordRef = useRef(null);
    return(
        <div>
            <input type = "text" ref={wordRef}/>
            <button onClick = { () => {updateWord(wordRef.current.value)}} >Entrar</button>
        </div>
    );
}

export default connect(null,{updateWord})(Form);