import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserDetails from './UserDetails';

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        familyNames: 'Doe Family',
        height: '6ft',
        dateOfBirth: '1994-05-20',
        highestEducation: 'Masters in Computer Science',
        weight: '70kg',
        occupation: 'Software Engineer',
        religion: 'Christian',
        occupationInDetail: 'Frontend Developer',
        caste: 'N/A',
        subCaste: 'N/A',
        phone: '1234567890',
        email: 'john.doe@example.com',
        residingCityDistrict: 'New York',
        hobbies: 'Reading, Traveling',
    });

    const [galleryImage] = useState([
        { path: 'https://i.pinimg.com/originals/00/5c/a7/005ca765038679e314b2df606eb1e0dd.jpg' },
        { path: 'https://i.pinimg.com/originals/00/5c/a7/005ca765038679e314b2df606eb1e0dd.jpg' },
        { path: 'https://i.pinimg.com/originals/00/5c/a7/005ca765038679e314b2df606eb1e0dd.jpg' },
        { path: 'https://i.pinimg.com/originals/00/5c/a7/005ca765038679e314b2df606eb1e0dd.jpg' },
    ]);

    return (
        <>
            <Grid container spacing={0} padding={2} sx={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '5px', width: { sx: '100%', sm: '100%', md: '95%' }, margin: '0 auto' }}>
                <Grid item xs={12} sm={4} container alignItems="stretch" style={{ padding: 0 }}>
                    <Card style={{ display: 'flex', flexDirection: 'column', margin: 0, width: '100%', borderRadius: 0 }} sx={{ height: { xs: '280px', sm: '280px', md: '320px', lg: '300px' } }}>
                        <CardMedia
                            component="img"
                            image="https://wallpapercave.com/wp/wp2525416.jpg"
                            alt="User Profile"
                            style={{ height: '100%', objectFit: 'contain', borderRadius: 0 }}
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} container alignItems="stretch" style={{ padding: 0 }}>
                    <Card style={{ display: 'flex', flexDirection: 'column', margin: 0, backgroundColor: 'white', borderRadius: '8px' }} sx={{ height: { xs: '350px', sm: '350px', md: '300px' } }}>
                        <CardContent style={{ flex: 1 }}>
                            <Grid container spacing={2} style={{ height: '100%' }}>
                                <Grid item xs={6}>
                                    <Typography variant="h5">Shivam Anand</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Ph No. 8969171781
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} container justifyContent="flex-end" alignItems="center">
                                    <IconButton>
                                        <StarBorderIcon />
                                    </IconButton>
                                    <IconButton>
                                        <PhoneIcon />
                                    </IconButton>
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_age.svg" alt="Age" style={{ verticalAlign: 'middle' }} /> 24 Yrs, 5'2"
                                    </Typography>
                                    <Typography variant="body2">
                                        <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_caste.svg" alt="Caste" style={{ verticalAlign: 'middle' }} /> Gupta (Caste No Bar)
                                    </Typography>
                                    <Typography variant="body2">
                                        <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_education.svg" alt="Education" style={{ verticalAlign: 'middle' }} /> B.Com., Marketing Professional
                                    </Typography>
                                    <Typography variant="body2">
                                        <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_location.svg" alt="Location" style={{ verticalAlign: 'middle' }} /> Surat, Gujarat
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} container spacing={2}>
                                    <Grid item>
                                        <Button variant="outlined" color="secondary" startIcon={<PhoneIcon />}>
                                            Call
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary" startIcon={<ArrowForwardIcon />}>
                                            Send Interest
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div style={{ width: '100%' }}>
                <UserDetails userDetails={userDetails} />
            </div>
            <div className='w-[100%] mx-auto mt-6'>
                <h3 className='text-[25px] md:text-[30px] lg:text-[36px] font-normal font-serif'>PHOTO GALLERY</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 justify-center'>
                    {galleryImage.map((value, index) => (
                        <div key={index}>
                            <img
                                src={value.path}
                                className='w-full h-[280px] md:h-[300px] lg:h-[355px] rounded-[15px] object-cover'
                                alt={`Photo ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default UserDetailsPage;
