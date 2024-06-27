import { Box, Card, CardActionArea, CardContent, Typography, Link } from '@mui/material';
import React from 'react';

const WeddingArangeMentCard = ({ image, title, text }) => {
  return (
    <Card sx={{ margin: '10px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <CardActionArea>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </CardActionArea>
      <CardContent sx={{ color: 'black', width: '100%', textAlign: 'center' }}>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {text}
        </Typography>
        <Link 
          href="#" 
          variant="body2" 
          sx={{ 
            display: 'inline-block',
            border: '1px solid black', 
            borderRadius: '0px 10px 0 10px', 
            padding: '10px', 
            color: 'black', 
            textDecoration: 'none', 
            marginTop: '10px' 
          }}
        >
          READ MORE
        </Link>
      </CardContent>
    </Card>
  );
};

export default WeddingArangeMentCard;
