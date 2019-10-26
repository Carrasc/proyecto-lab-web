import React from 'react';
import PropTypes from "prop-types";
import global from '../styles/global';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import '../styles/css/DashboardTendencie.css';

export default function DashboardTencencie(props) {    
    return (
        <div style={global.mainContainer}>
            <div style={{width:'100%', position :'relative', textAlign:'center'}}>
                <div className = 'dashboardTendencieLessonContainer'>
                    <img src={props.tendencieData[0]} style={{width:'100%'}}/>
                        <div className = 'dashboardTendencieLessonImage'> </div>
                        <div className = 'dashboardTendencieLessonInfoDiv'>
                            <h1 style = {global.bSecondaryTitleFont}>
                                {props.tendencieData[1]}
                            </h1>
                            <p style = {global.wSecondaryTitleFont}>
                                {props.tendencieData[2]}
                            </p>
                        </div>
                
                </div>
                <div className = 'dashboardTendencieLessonButtonDiv' >
                    <Button className = 'dashboardTendencieLessonButton'size="large" style={global.solidButtonStyle}><PlayCircleOutlineIcon style = {{paddingRight:'5px'}}/>VER CLASE</Button>	            
                </div>
            </div>
        </div>
    );
}

