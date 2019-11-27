import React from 'react';
//import PropTypes from "prop-types";
import globalStyles from  '../../styles/globalStyles';
import '../../styles/css/ContinueLesson.css';

export default function ContinueLesson(props) {
    
    return (
        <div>
             <a href = '/'>
            <div className = 'lessonContainer'>
               
                <img alt={props.lessonData.specialty} src={props.lessonData.img} style={{width:'100%'}}/>
               
                    <div className = 'infoDiv'>
                        <h1 style = {globalStyles.bmFont}>
                            {props.lessonData.name}
                        </h1>
                        <p style = {globalStyles.wlFont}>
                            {props.lessonData.specialty}
                        </p>
                    </div>
                    <div className = 'minutesDiv'>
                        <p  style = {globalStyles.wmFont}>
                            {props.lessonData.currentTime}
                        </p>
                    </div>    
            
            </div>
            </a>
            <div className = 'topicDiv' style = {globalStyles.gmFont} >
                {props.lessonData.topic}
            </div>
        </div>
    );
}

