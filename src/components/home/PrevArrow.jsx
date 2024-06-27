import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '-10px',top:'38%', zIndex: 2, cursor: 'pointer' }}
        onClick={onClick}
      >
        <ArrowBackIosIcon sx={{ fontSize: '35px',color: 'white', backgroundColor:'#B3B3B3',borderRadius:'100%',padding:'5px' }} />
      </div>
    );
  };
  export default PrevArrow