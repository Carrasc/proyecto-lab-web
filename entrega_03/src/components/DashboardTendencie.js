import React from 'react';
//import PropTypes from "prop-types";
import globalStyles from  '../styles/globalStyles';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import '../styles/css/DashboardTendencie.css';

export default function DashboardTencencie(props) {    
    return (
        <div style={globalStyles.mainContainer}>
            <div style={{width:'100%', position :'relative', textAlign:'center'}}>
                <div className = 'dashboardTendencieLessonContainer'>
                    <img alt={props.tendencieData.specialty} src={props.tendencieData.img} style={{width:'100%'}}/>
                        <div className = 'dashboardTendencieLessonImage'> </div>
                        <div className = 'dashboardTendencieLessonInfoDiv'>
                            <h1 style = {globalStyles.bSecondaryTitleFont}>
                                {props.tendencieData.name}
                            </h1>
                            <p style = {globalStyles.wSecondaryTitleFont}>
                                {props.tendencieData.specialty}
                            </p>
                        </div>
                
                </div>
                <div className = 'dashboardTendencieLessonButtonDiv' >
                    <Button className = 'dashboardTendencieLessonButton'size="large" style={globalStyles.solidButtonStyle}><PlayCircleOutlineIcon style = {{paddingRight:'5px'}}/>VER CLASE</Button>	            
                </div>
            </div>
        </div>
    );
}

