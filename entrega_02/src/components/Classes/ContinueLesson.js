import React from 'react';
import PropTypes from "prop-types";
import global from '../../styles/global';
import '../../styles/css/ContinueLesson.css';

export default function ContinueLesson(props) {
    
    return (
        <div>
             <a href = '/'>
            <div className = 'lessonContainer'>
               
                <img src={props.lessonData[0]} style={{width:'100%'}}/>
               
                    <div className = 'infoDiv'>
                        <h1 style = {global.bmFont}>
                            {props.lessonData[1]}
                        </h1>
                        <p style = {global.wlFont}>
                            {props.lessonData[2]}
                        </p>
                    </div>
                    <div className = 'minutesDiv'>
                        <p  style = {global.wmFont}>
                            {props.lessonData[3]}
                        </p>
                    </div>    
            
            </div>
            </a>
            <div className = 'topicDiv' style = {global.gmFont} >
                {props.lessonData[4]}
            </div>
        </div>
    );
}

