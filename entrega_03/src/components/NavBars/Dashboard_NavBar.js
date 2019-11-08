import React from 'react';
import '../../styles/NavBar.scss';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TextField from '@material-ui/core/TextField';


//popup
import Popup from "reactjs-popup";

//styles
import globalStyles from  '../../styles/globalStyles'


function DashboardNavBar() {
  const barStyle={
    margin: '0 5% 0 5%',
    backgroundColor: 'rgba(248, 248, 255, 1)',
    height:'3em',
    zIndex: 10001,
  }

  const textField = {
    width: 200,
  }
  const menu = {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    'overflow-y': 'scroll',
    height:'12em',
    
  }

  const menuSub = {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    'overflow-y': 'scroll',
    height:'20em',
  }

  const menuItem ={
    cursor: 'pointer',
    padding: '1em',
    width: 'auto',
    borderBottom: '1px solid rgb(187, 187, 187)',
  }

  return (

    <div style={barStyle} >
      <ul className='d_ul'>
        <nav id="navbar">
          <div style={global.bmFont}>
          <li style={{ float: 'left',}}>
              <a href="/">Medu lectures</a>
            </li>
            <li style={{ float: 'right' }}>
              <a href="/">ENARM</a>
            </li>
            <li style={{ float: 'right'}}>
              <a href="/">MEDUTALKS</a>
            </li>
            <li style={{ float: 'right',}}>
              <a href="/">MIS CLASES</a>
            </li>
            <li style={{ float: 'right',}}>
              <Popup
                trigger={ <a href="/">CATEGORÍAS</a>}
                position="bottom center"
                on="hover"
                contentStyle={{ padding: "0px", border: "none", width:'auto', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', borderRadius: '2em', }}
              >
                <div style={menu}>
                  <Popup
                    trigger={<a href="/" style={menuItem}>Urología</a>}
                    position="right top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    contentStyle={{ marginLeft:'1.8em', padding: "0px", border: "none", width:'auto', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', borderRadius: '2em', }}
                    arrow={true}
                  >
                    <div style={menuSub} >
                      <a href="/" style={menuItem}>Pene</a>
                      <a href="/" style={menuItem}>Testículos</a>
                      <a href="/" style={menuItem}>Vasos SanguíneosSanguíneosSanguíneos</a>
                      <a href="/" style={menuItem}>Pene</a>
                      <a href="/" style={menuItem}>Testículos</a>
                      <a href="/" style={menuItem}>Vasos Sanguíneos</a>
                      <a href="/" style={menuItem}>Pene</a>
                      <a href="/" style={menuItem}>Testículos</a>
                      <a href="/" style={menuItem}>Vasos Sanguíneos</a>
                      <a href="/" style={menuItem}>Pene</a>
                      <a href="/" style={menuItem}>Testículos</a>
                      <a href="/" style={menuItem}>Vasos Sanguíneos</a>
                      <a href="/" style={menuItem}>Pene</a>
                      <a href="/" style={menuItem}>Testículos</a>
                      <a href="/" style={menuItem}>Vasos Sanguíneos</a>
                      <a href="/" style={menuItem}>Pene</a>
                      <a href="/" style={menuItem}>Testículos</a>
                      <a href="/" style={menuItem}>Vasos Sanguíneos</a>
                      <a href="/" style={menuItem}>Pene</a>
                      <a href="/" style={menuItem}>Testículos</a>
                      <a href="/" style={menuItem}>Vasos Sanguíneos</a>
                      <a href="/" style={menuItem}>Pene</a>
                      <a href="/" style={menuItem}>Testículos</a>
                      <a href="/" style={menuItem}>Vasos Sanguíneos</a>
                    </div>
                  </Popup>
                  <Popup
                    trigger={<a href="/" style={menuItem}>Cardiología</a>}
                    position="right top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    contentStyle={{ marginLeft:'1.8em', padding: "0px", border: "none", width:'auto', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', borderRadius: '2em', }}
                    arrow={true}
                  >
                    <div style={menuSub}>
                      <a href="/" style={menuItem}>Corazón</a>
                      <a href="/" style={menuItem}>Válvulas</a>
                      <a href="/" style={menuItem}>Ahorta</a>
                    </div>
                  </Popup>
                  <Popup
                    trigger={<a href="/" style={menuItem}>Ginecología</a>}
                    position="right top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    contentStyle={{ marginLeft:'1.8em', padding: "0px", border: "none", width:'auto', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', borderRadius: '2em', }}
                    arrow={true}
                  >
                    <div style={menuSub}>
                      <a href="/" style={menuItem}>Ginecología Obstétrica</a>
                      <a href="/" style={menuItem}>Ginecología Pediátrica</a>
                      <a href="/" style={menuItem}>Ginecología Obstétrica</a>
                    </div>
                  </Popup>
                </div> 
              </Popup>
              
            </li>
            <li style={{ float: 'right'}}>              
              <a href="/"><SearchOutlinedIcon>BUSCAR</SearchOutlinedIcon></a>
            

            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              className={textField}
              margin="small"
            />
            </li>
          </div>
        </nav>
      </ul>
    </div>

  );

}
export default DashboardNavBar;



/*
            <div style={menu}>
              <div style={menuItem}> Menu item 1</div>
              <div style={menuItem}> Menu item 2</div>
              <div style={menuItem}> Menu item 3</div>
              <Popup
                trigger={<div style={menuItem}> sup Menu </div>}
                position="right top"
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0px", border: "none" }}
                arrow={false}
              >
                <div style={menu}>
                  <div style={menuItem}> item 1</div>
                  <div style={menuItem}> item 2</div>
                  <div style={menuItem}> item 3</div>
                </div>
              </Popup>
              <div style={menuItem}> Menu item 4</div>
            </div> 







            <Popup
                trigger={ <a href="/">CATEGORÍAS</a>}
                position="bottom center"
                on="hover"
              >
                <div style={menu}>
                  <Popup
                    trigger={<div style={menuItem}> sup Menu </div>}
                    position="right top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: "0px", border: "none" }}
                    arrow={true}
                  >
                    <div style={menu}>
                      <div style={menuItem}> item 1</div>
                      <div style={menuItem}> item 2</div>
                      <div style={menuItem}> item 3</div>
                    </div>
                  </Popup>
                  <Popup
                    trigger={<div style={menuItem}> sup Menu </div>}
                    position="right top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: "0px", border: "none" }}
                    arrow={true}
                  >
                    <div style={menu}>
                      <div style={menuItem}> item 1</div>
                      <div style={menuItem}> item 2</div>
                      <div style={menuItem}> item 3</div>
                    </div>
                  </Popup>
                  <Popup
                    trigger={<div style={menuItem}> sup Menu </div>}
                    position="right top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: "0px", border: "none" }}
                    arrow={true}
                  >
                    <div style={menu}>
                      <div style={menuItem}> item 1</div>
                      <div style={menuItem}> item 2</div>
                      <div style={menuItem}> item 3</div>
                    </div>
                  </Popup>
                </div> 
              </Popup>
              
*/
