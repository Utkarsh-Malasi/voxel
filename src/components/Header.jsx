import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Import logo
import logo from '../images/logo.png';

// Styled components
const LogoImage = styled('img')(({ theme }) => ({
  height: '100px',
  width: '100px',
  marginRight: '15px',
  borderRadius: '50%', // Make logo round
  border: `3px solid ${theme.palette.secondary.main}`, // Add a border with secondary color
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', // Enhanced shadow for depth
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(0, 0.5),
  padding: theme.spacing(1, 2),
  position: 'relative',
  fontWeight: 500,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '5px',
    left: '50%',
    width: '0%',
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '&::after': {
      width: '70%',
    },
  },
}));

const MobileNavItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Navigation items
  const navItems = [
    { label: 'Home', sectionId: 'home-section' },
    { label: 'Services', sectionId: 'pricing-section' },
    { label: 'Contact', sectionId: 'contact-section' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle mobile menu open/close
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    handleCloseNavMenu();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar 
      position="sticky" 
      sx={{
        height: scrolled ? '70px' : '80px',
        transition: 'height 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: '100%', padding: { xs: 1, md: 0 } }}>
          {/* Logo and Brand - always visible */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: { xs: 0, md: 3 } }}>
            <LogoImage src={logo} alt="Voxel Logo" />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              VOXEL
            </Typography>
          </Box>

          {/* Mobile menu */}
          {isMobile && (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                edge="end"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    borderRadius: '12px',
                    minWidth: '200px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                    mt: 1.5,
                  },
                }}
              >
                {navItems.map((item) => (
                  <MobileNavItem 
                    key={item.label} 
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    <Typography textAlign="center">{item.label}</Typography>
                  </MobileNavItem>
                ))}
              </Menu>
            </Box>
          )}

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {navItems.map((item) => (
              <NavButton
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.label}
              </NavButton>
            ))}
            <Button 
              variant="contained" 
              color="secondary"
              onClick={() => scrollToSection('contact-section')}
              sx={{ 
                ml: 2,
                borderRadius: '50px',
                px: 3,
                boxShadow: '0 4px 10px rgba(33, 150, 243, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 15px rgba(33, 150, 243, 0.4)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Header;