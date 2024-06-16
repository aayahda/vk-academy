import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Btn(props){
    return <Button variant="contained"  disableElevation style={{borderRadius:'0px',backgroundColor:props.bg,textTransform: 'none',fontSize:'18px',fontStyle:'italic',letterSpacing:'-0.5px'}}>
     Register today  <ArrowForwardIosIcon fontSize='8px' style={{ marginLeft: '8px' }}/>
    </Button>;
}

export default Btn;