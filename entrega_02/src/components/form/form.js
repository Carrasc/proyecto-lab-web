import React, {useRef} from 'react';
import updateWord from '../../store/word/action';
import {connect} from "react-redux";
import global from '../../styles/global';
import { HashLink as Link } from 'react-router-hash-link';



function Form ({updateWord}){
    const wordRef = useRef(null);
    return(
        <div>
            <input type = "text" ref={wordRef}/>
            <br/>
            <input type = "text"/>
            <Link to="/dashboard" className="nav-link">  <button style={global.solidButtonStyle} onClick = { () => {updateWord(wordRef.current.value)}} >Entrar</button></Link>
        </div>
    );
}

export default connect(null,{updateWord})(Form);
