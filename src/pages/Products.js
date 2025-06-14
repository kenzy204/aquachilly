import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography, Box, Card, CardContent, Button, Grid, Paper, useTheme, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import floatProduct from '../assets/float-product.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Products = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFloating(!isFloating);
    }, 2000);
    return () => clearInterval(interval);
  }, [isFloating]);

  const handleAddToCart = () => {
    setIsRotating(true);
    setTimeout(() => {
      navigate('/cart');
    }, 1000);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h1" component="h1" align="center" gutterBottom>
        Premium Aqua Float
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Our premium float product designed for ultimate comfort and style
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <CardMedia
                component="img"
                height="600"
                image={floatProduct}
                alt="Premium Aqua Float"
                sx={{ 
                  objectFit: 'contain',
                  padding: '1rem',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02) rotate(2deg)',
                  },
                  transform: isRotating ? 'rotateY(360deg)' : 'none',
                  transition: 'transform 1s ease-in-out',
                }}
              />
              {isFloating && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      bgcolor: theme.palette.primary.main,
                      color: 'white',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Typography variant="body2">
                      Floating...
                    </Typography>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 30, 0]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity
                      }}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: 'white'
                      }}
                    />
                  </Paper>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                p: 4
              }}
            >
              <Box>
                <Typography variant="h2" gutterBottom>
                  Premium Aqua Float
                </Typography>
                <Typography variant="h3" color="primary" gutterBottom>
                  EGP25,000
                </Typography>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography variant="body1" paragraph>
                    Experience ultimate comfort and style with our premium aqua float. 
                    Designed with the highest quality materials for maximum relaxation 
                    and durability. Perfect for any water activity - from pool relaxation 
                    to ocean adventures.
                  </Typography>
                </motion.div>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                  <Typography variant="h6">
                    <strong>Features:</strong>
                  </Typography>
                  <Typography variant="body1">
                    <strong>• Material:</strong> Premium PVC
                  </Typography>
                  <Typography variant="body1">
                    <strong>• Size:</strong> 180cm x 80cm
                  </Typography>
                  <Typography variant="body1">
                    <strong>• Weight:</strong> 1.5kg
                  </Typography>
                  <Typography variant="body1">
                    <strong>• Max Weight Capacity:</strong> 150kg
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 'auto' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleAddToCart}
                    sx={{
                      mt: 2,
                      width: '100%',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15)'
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                </motion.div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
