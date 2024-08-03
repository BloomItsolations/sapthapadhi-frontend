import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { listBanners } from '../../store/bannerSlice';

const WelcomePage = () => {

    const dispatch = useDispatch();
    const { bannersList } = useSelector(state => state.banner);
    console.log("BannerList", bannersList);
    useEffect(() => {
        dispatch(listBanners());
    }, [])

    const { ref: textRef, inView: textInView } = useInView({
        threshold: 0.3,
    });

    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.3,
    });

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 1,
    };

    if (!bannersList) {
        return <div>Loading...</div>
    }

    return (
        <div className='pt-16 bg-[#f5f5f5]'>
            <Container>
                <Box sx={{ textAlign: 'center', padding: '20px' }}>
                    <motion.div ref={textRef} initial="hidden" animate={textInView ? 'visible' : 'hidden'} variants={textVariants}>
                        <Typography
                            variant="h4"
                            component="div"
                            gutterBottom
                            sx={{
                                fontFamily: 'Metal Mania',
                                fontWeight: 400,
                                fontSize: { xs: '32px', sm: '48px', md: '64px' },
                                lineHeight: { xs: '20px', sm: '25px', md: '30px' }
                            }}
                        >
                            WELCOME TO
                        </Typography>
                        <Typography
                            variant="h4"
                            component="div"
                            gutterBottom
                            sx={{
                                fontFamily: 'Metal Mania',
                                fontWeight: 400,
                                fontSize: { xs: '32px', sm: '48px', md: '64px' },
                                lineHeight: { xs: '40px', sm: '60px', md: '76.16px' },
                                color: '#E5026B'
                            }}
                        >
                            SAPTHAPADHI.IN
                        </Typography>

                        <Typography variant="body1" sx={{ marginTop: '20px', color: 'black', width: { xs: '100%', md: '70%' }, textAlign: 'center', marginInline: 'auto', fontFamily: 'Poppins', fontSize: '22px' }}>
                            Best wedding matrimony It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: '20px', fontFamily: 'Poppins', fontSize: '22px', color: 'black', width: { xs: '100%', md: '70%' }, textAlign: "center", marginInline: 'auto' }}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humor, or randomized words which don't look even slightly believable.
                        </Typography>
                    </motion.div>
                    <motion.div ref={imageRef} initial="hidden" animate={imageInView ? 'visible' : 'hidden'} variants={imageVariants}>

                        <Slider {...settings}>
                            {
                              bannersList &&  bannersList?.map((value) => (
                                    <Box sx={{ marginTop: '30px', }} >
                                        <img
                                            src={`https://sapthapadhi.bloomitsolutions.co.in/${value.imageUrls[0].path}`}
                                            alt="Sample"
                                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                                        />
                                    </Box>

                                ))
                            }
                        </Slider>
                    </motion.div>

                </Box>
            </Container>
        </div>
    );
};

export default WelcomePage;
