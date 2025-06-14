import React, { useRef, useEffect } from 'react';
import { Container, Grid, Typography, Box, Button, Card, CardMedia, CardContent } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import floatProduct from '../assets/float-product.png';

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <motion.div className="fade-in" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h1" component="h1" align="center" gutterBottom>
            Welcome to AquaChilly
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Discover our premium float products designed for ultimate comfort and style
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            className="fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Card
              sx={{
                height: '100%',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <motion.div
                style={{
                  transform: scale,
                  opacity: opacity,
                  transition: 'all 0.5s ease'
                }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={floatProduct}
                  alt="Premium Float"
                  sx={{
                    objectFit: 'cover',
                    filter: 'brightness(1)'
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: scrollYProgress }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(transparent, rgba(0, 151, 178, 0.8))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    fontWeight: 'bold'
                  }}
                >
                  Float in Style
                </Typography>
              </motion.div>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            className="fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" gutterBottom>
                  Premium Float Experience
                </Typography>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Typography variant="body1" paragraph>
                    Experience the ultimate comfort with our premium float products. Designed for maximum relaxation and durability.
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Typography variant="body1" paragraph>
                    Perfect for any water activity - from pool relaxation to ocean adventures.
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/products')}
                    sx={{
                      mt: 2,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 12px rgba(0, 151, 178, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 16px rgba(0, 151, 178, 0.4)',
                      }
                    }}
                  >
                    Shop Now
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
