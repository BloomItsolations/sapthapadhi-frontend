import React from 'react';
import { Box, Typography, Card, CardActionArea, CardContent, Link } from '@mui/material';

const CategoryCard = ({ image, title, link }) => {
  return (
    <Card 
      sx={{ 
        margin: '10px', 
        position: 'relative', 
        overflow: 'hidden', 
        borderRadius: '12px', 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.03)'
        }
      }}
    >
      <CardActionArea>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ 
            width: '100%', 
            height: '300px',  // Increased height
            objectFit: 'cover', 
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        <CardContent 
          sx={{ 
            position: 'absolute', 
            bottom: 0, 
            background: 'rgba(0, 0, 0, 0.6)', 
            color: 'white', 
            width: '100%', 
            textAlign: 'center', 
            padding: '10px',
            boxSizing: 'border-box'
          }}
        >
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontFamily: 'Cabin', 
              fontWeight: 'bold', 
              fontSize: '1.25rem',
              marginBottom: '5px'
            }}
          >
            {title}
          </Typography>
          <Link 
            href={link} 
            variant="body2" 
            sx={{
              display: 'inline-block', 
              padding: '8px 16px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              borderRadius: '20px', 
              textDecoration: 'none',
              fontFamily: 'Cabin',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#0056b3'
              }
            }}
          >
            MORE DETAILS
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
