import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', right: '15px',top:'38%', zIndex: 2, cursor: 'pointer' }}
        onClick={onClick}
      >
        <ArrowForwardIosIcon sx={{ fontSize: '35px', color: 'white',backgroundColor:'#B3B3B3',borderRadius:'100%',padding:'5px' }} />
      </div>
    );
  };
  
export default NextArrow  