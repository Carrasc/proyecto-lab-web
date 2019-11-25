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
import Tendencies from '../components/Tendencies';
import Reviews from '../components/Reviews';
import CDashboardNavBar from '../components/NavBars/CDashboardNavBar';
import MDashboardNavBar from '../components/NavBars/MDashboardNavBar';

import ClassesInfo from '../components/Classes/Classes_Info';
import Video from '../components/Videos/Video'
import Topics from '../components/Classes/Classes_Topics';
import Subclass from '../components/Classes/Subclass';
import ReactSlickDemo from '../components/Carousels/newCarousel';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

import { withAuthenticator } from 'aws-amplify-react';




//import Word from '../components/word/word';
//import Form from '../components/form/form';

import '../styles/css/Class.css';

import database from '../api/api';


 
  var lessonData = database.lessonData;

  var tendencieData = database.tendencieData;

  var courses = database.courses;

  const data = [
    ['57', '147', require("../images/7.jpg"), 'BASES NEUROANATOMICAS', 'DEL SISTEMA NERVIOSO'],
    ['13', '153', require("../images/7.jpg"), 'LÓBULOS NEUROENCEFALÓGICOS', 'DEL SISTEMA NERVIOSO'],
    ['0', '80', require("../images/7.jpg"), 'ESTOY MAMADÍSIMO', 'DEL SISTEMA NERVIOSO'],
    ['57', '147', require("../images/7.jpg"), 'BASES NEUROANATOMICAS', 'DEL SISTEMA NERVIOSO'],

  ]


function Dashboard(props) {

  return (   
    <div >
		
		<UserNavBar/>		
  		{/*<DashboardNavBar/>*/}
		<CDashboardNavBar/>

		<br/>
		<br/>
		<Tendencies/>
        <Reviews color={'#f2f2f2'}/>
	  	
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


		{/*Courses*/}
		<div  style= {{textAlign:"center", marginTop:'5em'}}>
			<h3 style = {globalStyles.bSecondaryTitleFont}>ESPECIALIDADES</h3>
		</div>

		<div style={globalStyles.mainContainer}>
			<div style={{textAlign:"center"}}>
				<Grid container = {true} >
				{courses.map((courses,index) =>{
					return(
					<Grid item sm= {12} md={6} className = 'clase' key= {index} >
						<Clases  row = {courses} ></Clases>
					</Grid>
					
					)
				})}
			</Grid>   
			</div>
		</div>

		<DashboardTendencie tendencieData = {tendencieData} />

		<div style= {globalStyles.titleContainer}>
			<h1 style={globalStyles.bSecondaryTitleFont}>MIS CLASES</h1>
		</div>
		<Carousel component = {
                    
			data.map((data, index) =>{
				return (
				<div onClick={() => alert("Hello from here")}>    
				<Subclass data={data} />
				
				</div>
				
				)})
				
		} />


		<Footer/>
  
		
    </div>
  );
}

export default Dashboard;
