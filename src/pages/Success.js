import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, CircularProgress, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Card sx={{ p: 4, textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h1" color="primary" gutterBottom>
            🎉 Order Placed Successfully!
          </Typography>
          
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom>
              Thank you for your purchase!
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              Premium Aqua Float
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Order #AQUA2025
            </Typography>
            <Typography variant="body1" paragraph>
              Your order has been successfully placed and is being processed.
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Delivery Timeline
              </Typography>
              <Typography variant="body1" paragraph>
                Your Premium Aqua Float will be delivered within 10 business days.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Estimated Delivery Date:</strong> {new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </Typography>
              
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <CircularProgress size={50} />
                <Typography variant="body1" sx={{ ml: 2 }}>
                  Tracking your order...
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/products')}
              sx={{ mr: 2 }}
            >
              Continue Shopping
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/about')}
            >
              Contact Us
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Success;
