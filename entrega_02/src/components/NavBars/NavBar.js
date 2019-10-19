import React from 'react';
import '../../styles/NavBar.scss';
import Logo from '../../logos/Logo2.png'
import { HashLink as Link } from 'react-router-hash-link';
import Login from '../LoginPage';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('l')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function NavBar(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const { container } = props;
  const navBar_elements = ['Contenidos', 'Funciones', 'Precios','Iniciar Sesión','Registrar'];
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const imageStyle = {
    position: "absolute",
    left: "50%",
    top: "10%",
    width: "45px",
    height: "45px"
  };

  const drawer =(
    <div style={{ padding: '0 0 0 5em' }} className="container">
      <header className='header_navbar' >
        <nav id="navbar">
          <ul className='ul_navbar' style={{ fontSize: '0.7em'}}>
            <img alt = '' src={Logo} style={imageStyle}></img>
            <div>
              <li className='li_navbar'>
                <Link className='a_navbar' smooth to="/#contenidos">Contenidos</Link>
              </li>

              <li className='li_navbar'>
                <a className='a_navbar' href="/">Funciones</a>
              </li>

              <li className='li_navbar'>
                <a className='a_navbar' href="/">Precios</a>
              </li>
              <li className='li_navbar' style={{ float: 'right', padding: '0 5em 0 0' }}>
                <a className='a_navbar' href="/" onClick={() => setModalShow(true)}>Iniciar Sesión</a>
              </li>
              <li className='li_navbar' style={{ float: 'right',}}>
                <a className='a_navbar' href="/">Registrar</a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
	);

	const drawer2=(
		<div>
			<div className={classes.toolbar} />
		<List>
        {navBar_elements.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
	  </div>

	);

 

  return (
    <>
		<div className={classes.root}>
				<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
					</Toolbar>
				<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
						paper: classes.drawerPaper,
						}}
						ModalProps={{
						keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer2}
					</Drawer>
					</Hidden>
					<Hidden smDown implementation="css">
						{drawer}
					</Hidden>
				</nav>
		</div>
      <Login
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
    </>

  );

}


export default NavBar;


