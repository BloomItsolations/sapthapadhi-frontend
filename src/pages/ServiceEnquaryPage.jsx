import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Button, Container } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import RestApi from '../api/RestApi';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const PREFIX = 'ServiceEnquiryPage';
const classes = {
    root: `${PREFIX}-root`,
    container: `${PREFIX}-container`,
    paper: `${PREFIX}-paper`,
    form: `${PREFIX}-form`,
    field: `${PREFIX}-field`,
    descriptionContainer: `${PREFIX}-descriptionContainer`,
    descriptionTitle: `${PREFIX}-descriptionTitle`,
    descriptionText: `${PREFIX}-descriptionText`,
};

const Root = styled('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        flexGrow: 1,
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        backgroundColor: theme.palette.background.default,
    },
    [`& .${classes.container}`]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    [`& .${classes.paper}`]: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: theme.shadows[3],
        borderRadius: theme.shape.borderRadius,
    },
    [`& .${classes.descriptionContainer}`]: {
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        textAlign: 'left',
    },
    [`& .${classes.descriptionTitle}`]: {
        fontSize: '1.5rem',
        fontWeight: 600,
        marginBottom: theme.spacing(2),
        color: theme.palette.primary.main,
    },
    [`& .${classes.descriptionText}`]: {
        fontSize: '1rem',
        color: theme.palette.text.secondary,
    },
    [`& .${classes.field}`]: {
        marginBottom: theme.spacing(2),
    },
    [`& .${classes.form}`]: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const serviceContent = [
    {
        title: 'FUNCTION OR WEDDING HALL',
        description:
            "We provide seamless function and wedding hall bookings, ensuring the perfect venue for all your special events and celebrations.",
        slug: 'function-or-wedding-hall',
    },
    {
        title: 'THE PHOTOGRAPHY',
        description:
            "Capture your special moments with our professional photography services, ensuring memories that last a lifetime.",
        slug: 'photography',
    },
    {
        title: 'DECORATION',
        description:
            "Transform your event with our stunning decoration services, creating unforgettable atmospheres for every occasion.",
        slug: 'decoration',
    },
    {
        title: 'CATERING',
        description:
            "Delight your guests with our exceptional catering services, offering a feast of flavors for every celebration.",
        slug: 'catering',
    },
    {
        title: 'MUSIC OR ORCHESTRA',
        description:
            "Elevate your event with our enchanting music and orchestra services, creating a memorable soundscape.",
        slug: 'music-or-orchestra',
    }
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;

const ServiceEnquiryPage = () => {
    const { subject } = useParams();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const service = serviceContent.find(service => service.slug === subject);
    const { authInfo } = useSelector(state => state.auth);

    const validate = () => {
        const errors = {};
        if (!fullName) errors.fullName = 'Full Name is required';
        if (!email || !emailRegex.test(email)) errors.email = 'Invalid email address';
        if (!phone || !phoneRegex.test(phone)) errors.phone = 'Phone number must be 10 digits';
        if (!message) errors.message = 'Message is required';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validate()) return;
        if (!authInfo) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Please Login..",
            });
            navigate('/login');
            return;
        }
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('subject', subject);
        formData.append('message', message);

        try {
            const response = await RestApi.post(`/app/addEnquiry`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${authInfo?.token}`
                }
            });

            if (response.data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: "Enquiry submitted successfully😊",
                });
                setFullName('');
                setEmail('');
                setMessage('');
                setPhone('');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Something went wrong..",
            });
        }
    };

    return (
        <Root className={classes.root}>
            <Container>
                <Grid container spacing={3} className={classes.container}>
                    {/* Service Description */}
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.descriptionContainer}>
                            {service && (
                                <>
                                    <Typography variant="h6" className={classes.descriptionTitle}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" className={classes.descriptionText}>
                                        {service.description}
                                    </Typography>
                                </>
                            )}
                        </Paper>
                    </Grid>
                    {/* Enquiry Form */}
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" sx={{ fontSize: '40px', marginBottom: '24px' }}>
                                Enquiry Form
                            </Typography>
                            <form noValidate autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Full Name"
                                            variant="outlined"
                                            className={classes.field}
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            error={!!errors.fullName}
                                            helperText={errors.fullName}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            variant="outlined"
                                            className={classes.field}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            error={!!errors.email}
                                            helperText={errors.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            variant="outlined"
                                            className={classes.field}
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            error={!!errors.phone}
                                            helperText={errors.phone}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            variant="outlined"
                                            value={subject}
                                            className={classes.field}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            label="Message"
                                            variant="outlined"
                                            className={classes.field}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            error={!!errors.message}
                                            helperText={errors.message}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            type="submit"
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Root>
    );
};

export default ServiceEnquiryPage;
