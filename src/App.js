
// import { integerPropType } from '@mui/utils';
import './App.css';
import MuiAlert from './Component_3/AlertMui';
import MuiBadge from './Component_3/BadgeMui';
// import UIButton from './Component/Home';
// import MyTypography from './Component/Typography';
// import InputUI from './Component_2/Inputs';
// import PropMUI from './Component_2/Prop';
// import Complete from './Component_2/AutoCom';
// import SwitchUI from './Component_2/Switch';
// import CardhUI from './Component_2/Card';
// import BoxUI from './Component_2/Box'
// import ShowUIGrid from './Component_3/Grid';
import Accordio from './Component_3/MuiAccordion';
import TopNav from './Component_3/TopNavbar';
import MuiGallary from './Component_3/MuiGallary';
function App(){
              return(<>
              {/* <div className='container-fluid'>
              <div class="row p-5 justify-content-center align-items-center ">
                <div class="col ">{<UIButton />}</div>
              </div>
              <div class="row p-5 justify-content-center align-items-center ">
                <div class="col ">{<MyTypography />}</div>
              </div>
              </div> */}
              {/* <div>
                <div className='row'>
                  <div className='col m-3' >
                   <InputUI />
                   <hr/>
                    <BoxUI/>
                  </div>
                  <div className='col' ><PropMUI/><hr/><Complete /><hr/><SwitchUI /><hr/><CardhUI /></div>
                </div>
              </div> */}
              <div className='container-fluid'>
                {/* <div className='row'>
                  <div className='col p-3' > */}
                   {/* <ShowUIGrid /> */}
                   <hr/>
                   <MuiGallary/>
                   <hr/>
                  <Accordio/>
                  <hr/>
                  <MuiAlert/>
                  <hr/>
                  {/* <MuiBadge /> */}
                  <hr/>
                  <TopNav />
                  </div>
                {/* </div>
              </div> */}
              </>);
      }
export default App; 