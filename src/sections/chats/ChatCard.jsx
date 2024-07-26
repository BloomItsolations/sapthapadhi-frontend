import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ChatCard({ to, name, image, unreadCount, captions }) {
  return (
    <Card sx={{ display: 'flex', my: 1 }} component={Link} to={`/app/chat/${to}`}>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100, borderRadius: '100%', p: 1 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="subtitle2" color="primary.light">
            {unreadCount} 
          </Typography>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {captions}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
