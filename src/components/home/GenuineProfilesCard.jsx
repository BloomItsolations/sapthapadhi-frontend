import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const GenuineProfilesCard = ({title,imageUrl,paragraph}) => {
  return (
    <Card sx={{ flex: 1, padding: 2, backgroundColor: '#D9D9D9', borderRadius: '0px 20px 0 20px', border: '3px solid black' }}>
          <CardContent>
            <Typography variant="h5"  component="div" gutterBottom sx={{fontFamily: 'Metal Mania',color:'#e5026b',
                            fontWeight: 400, fontSize: '32px',  textAlign: 'center' }}>
             {title}
            </Typography>
            <Box
              component="img"
              sx={{ width: '200px', height: 'auto', maxHeight: '200px', objectFit: 'cover', marginInline: 'auto' }}
              alt="Genuine Profiles"
              src={imageUrl}
            />
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2,fontFamily:'Cabil', fontSize: '32px', textAlign: 'center', color: '#000000' }}>
            {paragraph}
            </Typography>
          </CardContent>
        </Card>
  )
}

export default GenuineProfilesCard
