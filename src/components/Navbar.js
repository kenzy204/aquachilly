import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const texts = [
    'Premium Aqua Float - Ultimate Comfort & Style',
    'Experience Luxury in Water',
    'Ergonomic Design for Maximum Relaxation',
    'Durable & Long-lasting Quality',
    'Free Shipping on First Order'
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{
      position: 'relative'
    }}>
      <Box
        sx={{
          backgroundColor: '#0097b2',
          color: 'white',
          padding: '4px 0',
          textAlign: 'center',
          fontSize: '0.9rem',
          fontWeight: 'bold',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {texts[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </Box>
      <AppBar
      position="static"
      color="primary"
      sx={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(12px)',
        backgroundColor: 'white',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem',
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease',
              }
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="AquaChilly Logo"
              height={80}
              width="auto"
              sx={{
                filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2))',
                transition: 'filter 0.3s ease',
                '&:hover': {
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))',
                }
              }}
            />
          </Box>

        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 2,
          }}
        >
          <Button
            color="secondary"
            component={RouterLink}
            to="/products"
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                color: 'primary.main',
              },
            }}
          >
            Products
          </Button>
          <Button
            color="secondary"
            component={RouterLink}
            to="/about"
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            About
          </Button>
        </Box>

        <IconButton
          color="inherit"
          onClick={handleDrawerOpen}
          sx={{ display: { md: 'none' } }}
        >
          <Box
            component="svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            sx={{
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'rotate(15deg)',
              },
            }}
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </Box>
        </IconButton>

        <Drawer
          anchor="right"
          open={open}
          onClose={handleDrawerClose}
          sx={{
            '& .MuiDrawer-paper': {
              width: 250,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              padding: '2rem',
            }}
          >
            <ListItem
              button
              component={RouterLink}
              to="/products"
              onClick={handleDrawerClose}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to="/about"
              onClick={handleDrawerClose}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default Navbar;
