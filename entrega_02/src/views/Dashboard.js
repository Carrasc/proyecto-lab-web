import React from 'react';
import global from "../styles/global.js";
import UserNavBar from '../components/NavBars/User_NavBar';
import DashboardNavBar from '../components/NavBars/Dashboard_NavBar.js';
import Carousel from '../components/Carousels/Carousel';
import { Image } from "semantic-ui-react";
import Grid from '@material-ui/core/Grid';
import Clases from '../components/Classes/Classes';
import Footer from '../components/Footer';
import Sticky from 'react-sticky-el';
import ContinueLesson from '../components/Classes/ContinueLesson';
import DashboardTendencie from '../components/DashboardTendencie';
//import CDashboardNavBar from '../components/NavBars/CDashboardNavBar';
import Word from '../components/word/word';
import Form from '../components/form/form';

import '../styles/css/Class.css';

  
const imagesCarousel = [
	require("../images/2.jpg"),
	require("../images/3.jpg"),
	require("../images/4.jpg"),
	//"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
	//"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	//"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  
  ];

 
  var data = [
	['Luis Fernando Carrasco','Urologí', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Mauricio Peon','Ginecología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Alexandro Marcelo','Neurología','https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
	['Romeo Varela','Cardiología', 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347235?k=6&m=92347235&s=612x612&w=0&h=KEceEG1DUc4O8KR-wZw6KI2j2cw9b915CekSI414mQQ='],
  
  ];

  var lessonData = [
    ['https://i.pinimg.com/564x/92/d9/1e/92d91edc5d19e552a12bb12383337465.jpg','Dra. Marisol García','CARDIOLOGÍA' ,'05:04','085. Placenta Previa: Tipos y Diagnósticos'],
    ['https://i.pinimg.com/564x/92/d9/1e/92d91edc5d19e552a12bb12383337465.jpg','Dra. Marisol García','CARDIOLOGÍA' ,'05:04','085. Placenta Previa: Tipos y Diagnósticos'],
    ['https://i.pinimg.com/564x/92/d9/1e/92d91edc5d19e552a12bb12383337465.jpg','Dra. Marisol García','CARDIOLOGÍA' ,'05:04','085. Placenta Previa: Tipos y Diagnósticos'],

  
  ];

  var tendencieData = [
    'https://i.pinimg.com/564x/92/d9/1e/92d91edc5d19e552a12bb12383337465.jpg','Dra. Marisol García','CARDIOLOGÍA' ,'05:04','085. Placenta Previa: Tipos y Diagnósticos'
    
  
  ];



function Dashboard(props) {
  return (   
    <div >
		<UserNavBar/>		
  		<Sticky style = {{zIndex: 10001}}><DashboardNavBar/></Sticky>
	  	
		<div style= {global.mainContainer}>
			<h1 style={global.bMainTitleFont}>Medu Lectures</h1>
			<h3 style={global.gSecondaryTitleFont}>Continuar Lección </h3>
		</div>

   
		<Carousel component = {
         lessonData.map((lessonData,index) =>{
            return (
              <ContinueLesson lessonData = {lessonData}/>
              )})
            
          } /> 


		{/*Classes*/}
		<div  style= {{textAlign:"center", marginTop:'3em'}}>
			<h3 style = {global.bSecondaryTitleFont}>ESPECIALIDADES</h3>
		</div>
		<div style={global.mainContainer}>
			<div style={{textAlign:"center"}}>
				<Grid container = {true} >
				{data.map((data,index) =>{
					return(
					<Grid item sm= {12} md={6} className = 'clase' key= {index} >
						<Clases  row = {data} ></Clases>
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
