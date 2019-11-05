import React from 'react';
import { selectActiveWord } from '../../store/word/reducer';
import { connect } from 'react-redux';




const Word = ({word}) => <h1>{word}</h1>

const mapStateToProps = state =>{
    return {
        word:selectActiveWord(state)
    }
}

export default connect(mapStateToProps)(Word)