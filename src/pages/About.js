import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h1" component="h1" align="center" gutterBottom>
        About AquaChilly
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Discover our story and commitment to quality
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="/images/about.jpg"
              alt="About Us"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h2" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              AquaChilly was founded with a passion for creating exceptional water experiences. Our premium float products are designed to provide maximum comfort and durability.
            </Typography>
            <Typography variant="h3" gutterBottom>
              Our Values
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body1">
                <strong>Quality:</strong> We use only the finest materials
              </Typography>
              <Typography variant="body1">
                <strong>Comfort:</strong> Designed for maximum relaxation
              </Typography>
              <Typography variant="body1">
                <strong>Durability:</strong> Built to last
              </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
