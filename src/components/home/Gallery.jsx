import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Box,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import RestApi from '../../api/RestApi';
import { color } from 'framer-motion';
import Swal from 'sweetalert2';


const PREFIX = 'Gallery';
const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  media: `${PREFIX}-media`,
  uploadBox: `${PREFIX}-uploadBox`,
  deleteIcon: `${PREFIX}-deleteIcon`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(2),
  },
  [`& .${classes.card}`]: {
    position: 'relative',
    margin: theme.spacing(1),
    overflow: 'hidden',
  },
  [`& .${classes.media}`]: {
    height: 250, // Increased size
    width: '100%', // Adjust width for consistency
    transition: 'transform 0.3s ease',
  },
  [`& .${classes.uploadBox}`]: {
    height: 250, // Same size as images
    backgroundColor: '#e0e0e0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px dashed #888',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  [`& .${classes.deleteIcon}`]: {
    position: 'absolute',
    top: 8,
    right: 8,
    color:'white',
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: '#c11111',
    },
  },
}));

const GalleryImage = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const totalBoxes = 4;
  const remainingBoxes = totalBoxes - galleryImages?.length;
  const { authInfo } = useSelector((state) => state.auth);

  const fetchGalleryImages = async () => {
    try {
      const response = await fetch(
        'https://sapthapadhimatrimony.in/backend/app/gallery',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authInfo?.token}`,
          },
        }
      );
      const result = await response.json();
      setGalleryImages(result.gallery || []);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    }
  };

  useEffect(() => {
    fetchGalleryImages();
  }, [authInfo?.token]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      Swal.fire('Error', 'No file selected!', 'error');
      return;
    }
  
    const formData = new FormData();
    formData.append('image', file);
  
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
  
      await RestApi.post('app/addGallery', formData, config);
      fetchGalleryImages();
      Swal.fire('Uploaded!', 'The image has been uploaded.', 'success');
    } catch (error) {
      console.error('Error uploading image:', error);
      Swal.fire('Error', 'Failed to upload the image.', 'error');
    }
  };
  const handleDeleteImage = async (index) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "This action cannot be undone!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
      });
  
      if (result.isConfirmed) {
        await RestApi.delete(`/app/deleteimage/${index}`, {
          headers: {
            Authorization: `Bearer ${authInfo.token}`,
          },
        });
        fetchGalleryImages();
        Swal.fire('Deleted!', 'The image has been deleted.', 'success');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      Swal.fire('Error', 'Failed to delete the image.', 'error');
    }
  };

  const renderImageCards = () => {
    return galleryImages?.map((image, index) => (
      <Grid item xs={12} sm={6} md={6} key={index}>
        <Card className={classes.card}>
          <IconButton
            className={classes.deleteIcon}
            onClick={() => handleDeleteImage(index)}
          >
            <Delete />
          </IconButton>
          <CardMedia
            className={classes.media}
            image={`${process.env.REACT_APP_IMASE_BASE_URL}/${image}`}
            title={`Image ${index + 1}`}
          />
        </Card>
      </Grid>
    ));
  };

  const renderUploadBoxes = () => {
    let uploadBoxes = [];
    for (let i = 0; i < remainingBoxes; i++) {
      uploadBoxes.push(
        <Grid item xs={12} sm={6} md={6} key={`upload-box-${i}`}>
          <label htmlFor={`upload-input-${i}`} style={{ cursor: 'pointer' }}>
            <Box className={classes.uploadBox}>
              <input
                type="file"
                style={{ display: 'none', objectFit: 'contain' }}
                id={`upload-input-${i}`}
                accept="image/*"
                onChange={handleImageUpload}
              />
              <span>Upload Image</span>
            </Box>
          </label>

        </Grid>
      );
    }
    return uploadBoxes;
  };

  return (
    <Root className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          {renderImageCards()}
          {renderUploadBoxes()}
        </Grid>
      </Container>
    </Root>
  );
};

export default GalleryImage;
