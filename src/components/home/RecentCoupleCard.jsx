import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const RecentCoupleCard = ({ image, title }) => {
    return (
        <Card sx={{ margin: '10px', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
            <CardActionArea>
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <CardContent sx={{ position: 'absolute', bottom: 0, background: 'rgba(0, 0, 0, 0.5)', color: 'white', width: '100%', textAlign: 'center' }}>
                    <Typography variant="h5" component="div" gutterBottom >
                        {title}
                    </Typography>
                    <Link href="#" variant="body2" className='border-[3px] border-[#79442D] rounded-bl-[10px] rounded-tr-[10px] px-[10px] py-[5px] text-white ' style={{ color: "white" }}>
                        MORE DETAILS
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card>)
}

export default RecentCoupleCard