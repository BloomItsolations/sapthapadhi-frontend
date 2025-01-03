import { Box, Card, CardActionArea, CardContent, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const BestOneCard = ({ image, title ,story}) => {
    return (
        <Card
            sx={{
                margin: '10px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }}
        >
            <CardActionArea>
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{ width: '100%', height: { xs: '200px', sm: '300px', md: '350px' }, objectFit: 'cover' }}
                />
                <CardContent
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        width: '100%',
                        textAlign: 'center',
                        padding: '16px',
                        boxSizing: 'border-box',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        gutterBottom
                        sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 'bold' }}
                    >
                        {title}
                    </Typography>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#e5026b',
                                borderRadius:'20px',
                                fontFamily: 'Cabin',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#b60e5c',
                                },
                            }}
                        >
                            MORE DETAILS
                        </Button>
                    </Link>
                </CardContent>
            </CardActionArea>
            <Typography variant="body2" sx={{ color: 'black', padding: '16px', fontFamily: 'Merriweather, serif' , textAlign: 'center', fontSize:'inherit' }}>
{story}            </Typography>
        </Card>
    );
};

export default BestOneCard;
