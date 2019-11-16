import React from 'react';
import globalStyles from  "../styles/globalStyles.js";
import UserNavBar from '../components/NavBars/User_NavBar';
import DashboardNavBar from '../components/NavBars/Dashboard_NavBar.js';
import Carousel from '../components/Carousels/Carousel';
//import { Image } from "semantic-ui-react";
import Grid from '@material-ui/core/Grid';
import Clases from '../components/Classes/Classes';
import Footer from '../components/Footer';
import Sticky from 'react-sticky-el';
import ContinueLesson from '../components/Classes/ContinueLesson';
import DashboardTendencie from '../components/DashboardTendencie';
//import CDashboardNavBar from '../components/NavBars/CDashboardNavBar';
//import Word from '../components/word/word';
//import Form from '../components/form/form';

import '../styles/css/Class.css';

import database from '../api/api';


 
  var lessonData = database.lessonData;

  var tendencieData = database.tendencieData;

  var classes = database.classes;


function Dashboard(props) {

  return (   
    <div >
		<UserNavBar/>		
  		<DashboardNavBar/>
	  	
		<div style= {globalStyles.mainContainer}>
			<h1 style={globalStyles.bMainTitleFont}>Medu Lectures</h1>
			<h3 style={globalStyles.gSecondaryTitleFont}>Continuar Lección </h3>
		</div>

   
		<Carousel component = {
         lessonData.map((lessonData,index) =>{
            return (
              <ContinueLesson lessonData = {lessonData}/>
              )})
            
          } /> 


		{/*Classes*/}
		<div  style= {{textAlign:"center", marginTop:'3em'}}>
			<h3 style = {globalStyles.bSecondaryTitleFont}>ESPECIALIDADES</h3>
		</div>
		<div style={globalStyles.mainContainer}>
			<div style={{textAlign:"center"}}>
				<Grid container = {true} >
				{classes.map((classes,index) =>{
					return(
					<Grid item sm= {12} md={6} className = 'clase' key= {index} >
						<Clases  row = {classes} ></Clases>
					</Grid>
					
					)
				})}
			</Grid>   
			</div>
		</div>

		<DashboardTendencie tendencieData = {tendencieData}/>
		<Footer/>
  
      
    </div>
  );
}

export default Dashboard;
