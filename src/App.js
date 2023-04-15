import { Box, Button, ButtonGroup, Divider, Grid } from '@mui/material';
import {Routes,Route,Outlet,useNavigate} from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from './logo.png';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TerminalIcon from '@mui/icons-material/Terminal';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Intro from './Pages/Intro';
import Diagnosis from './Pages/Diagnosis';
import Phases from './Pages/Phases';
import Treatment from './Pages/Treatment';


function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const goTo = useNavigate();
  const navigate = param => e =>{
    goTo(param);
  }
  return (
    <>
      {matches && <Grid container spacing={0} sx={{'height':'100vh','direction':'rtl','justifyContent':'center','textAlign':'center'}}>
        <Grid xl={4} lg={4} md={4} sm={12} xs={12} item sx={{'height':'100vh','backgroundColor':'','color':''}}>
          <Grid item xl={12} sm={12} md={12} lg={12} xs={12}>
          <img src={Logo} width={'50%'} style={{'marginTop':'20px'}}/>
          </Grid>
          <ButtonGroup
             orientation="vertical"
             aria-label="vertical contained button group"
             variant="text"
          >
            {[
              <Button onClick={navigate('/')} sx={{'fontSize':'25px','fontWeight':'bolder'}}><ViewInArIcon />&nbsp;مقدمه</Button>,
              <Button onClick={navigate('diagnosis')} sx={{'fontSize':'25px','fontWeight':'bolder'}}><ViewInArIcon />&nbsp;تشخیص</Button>,
              <Button onClick={navigate('phases')} sx={{'fontSize':'25px','fontWeight':'bolder'}}><ViewInArIcon />&nbsp;4 فاز قمار</Button>,
              <Button onClick={navigate('treatment')} sx={{'fontSize':'25px','fontWeight':'bolder'}}><ViewInArIcon />&nbsp;درمان</Button>,
            ]}
          </ButtonGroup>
          <Divider/>
          <h4><TerminalIcon></TerminalIcon>برنامه نویس : مهدی رائف</h4>
        </Grid>
        <Grid xl={8} lg={8} md={8} sm={12} xs={12} item sx={{'height':'100vh','justifyContent':'center','textAlign':'center'}}>
          <Routes>
            <Route index element={<Intro/>}></Route>
            <Route path={'diagnosis'} element={<Diagnosis/>}></Route>
            <Route path={'phases'} element={<Phases/>}></Route>
            <Route path={'treatment'} element={<Treatment/>}></Route>
          </Routes>
          <Outlet />
        </Grid>
      </Grid>}
    </>
  );
}
export default App;
