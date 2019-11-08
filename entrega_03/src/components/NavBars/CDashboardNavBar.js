import React from 'react';

//import './NavStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import SearchIcon from '@material-ui/icons/Search';

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';



import globalStyles from  '../../styles/globalStyles';

const barStyle={
    margin: '0 5% 0 5%',
    height:'3em',
    zIndex: 10001,
  }

  const useStyles = makeStyles(theme => ({
    
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade('#0000FF', 0.05),
        '&:hover': {
        backgroundColor: fade('#0000FF', 0.1),
        },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'blue'
    },
    inputRoot: {
      color: 'blue',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }));


export default function CNavbar(props) {

    const classes = useStyles();
  return (
        <nav class="navbar navbar-expand-lg bg-light" style={barStyle}>
            <div class="d-flex flex-grow-1">
                <span class="w-100 d-lg-none d-block"></span>
                <a class="navbar-brand" href="#">
                    <h1 style={global.bnlFont}>MEDU LECTURES</h1>
                </a>
                <div class="w-100 text-right">
                    <button class="navbar-toggler navbar-dark bg-primary" type="button" data-toggle="collapse" data-target="#myNavbar7">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
                <ul class="navbar-nav ml-auto flex-nowrap">
                    <li class="nav-item">
                    <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link"><h1 style={global.bnlFont}>Categorias</h1></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link"><h1 style={global.bnlFont}>Mis Clases</h1></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link"><h1 style={global.bnlFont}>Medu Talks</h1></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link"><h1 style={global.bnlFont}>ENARM</h1></a>
                    </li>
                </ul>
            </div>
        </nav>
  );
}