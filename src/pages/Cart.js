import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button, Grid, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import floatProduct from '../assets/float-product.png';

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h1" component="h1" align="center" gutterBottom>
        Shopping Cart
      </Typography>

      <Card sx={{ mt: 4, p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="300"
              image={floatProduct}
              alt="Premium Aqua Float"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h2" gutterBottom>
                Premium Aqua Float
              </Typography>
              <Typography variant="h3" color="primary" gutterBottom>
                $199.99
              </Typography>
              <Typography variant="body1" paragraph>
                1 item in cart
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleCheckout}
                sx={{ mt: 2 }}
              >
                Proceed to Checkout
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Cart;
