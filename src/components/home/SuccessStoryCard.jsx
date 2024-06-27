import { Box, Card, CardActionArea, CardContent, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SuccessStoryCard = ({ image, title }) => {
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
                    sx={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <CardContent
                    sx={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        textAlign: 'center',
                        padding: '20px',
                        boxSizing: 'border-box',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        gutterBottom
                        sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}
                    >
                        {title}
                    </Typography>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#007bff',
                                borderRadius:'20px',
                                fontFamily: 'Cabin',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#0056b3',
                                },
                            }}
                        >
                            MORE DETAILS
                        </Button>
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default SuccessStoryCard;
