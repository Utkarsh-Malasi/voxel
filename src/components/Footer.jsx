import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// Import logo
import logo from '../images/logo.png';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  padding: '4rem 0 2rem',
  marginTop: 'auto',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #2196f3, #4CAF50, #FFC107)',
  }
}));

const FooterLink = styled('a')({
  color: '#fff',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  display: 'block',
  marginBottom: '0.5rem',
  cursor: 'pointer',
  position: 'relative',
  paddingLeft: '0',
  '&:hover': {
    opacity: 0.8,
    paddingLeft: '5px',
  }
});

const SocialIconButton = styled(IconButton)({
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-3px)',
  },
  transition: 'all 0.3s ease',
});

const LogoImage = styled('img')({
  height: '70px',
  width: '70px',
  marginRight: '10px',
  borderRadius: '50%', // Make logo round
  border: '2px solid #2196f3', // Add a border with secondary color
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add subtle shadow for depth
  objectFit: 'cover',
});

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <FooterWrapper component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LogoImage src={logo} alt="Voxel Logo" />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                VOXEL
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8, maxWidth: '300px' }}>
              Providing professional digital services to help your business grow and succeed in the digital landscape.
            </Typography>
            <Stack direction="row" spacing={1}>
              <SocialIconButton aria-label="Facebook">
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="Twitter">
                <TwitterIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="LinkedIn">
                <LinkedInIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="Instagram">
                <InstagramIcon />
              </SocialIconButton>
            </Stack>
          </Grid>
          
          {/* Services */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Services
            </Typography>
            <FooterLink onClick={() => scrollToSection('pricing-section')}>Web Development</FooterLink>
            <FooterLink onClick={() => scrollToSection('pricing-section')}>Digital Marketing</FooterLink>
            <FooterLink onClick={() => scrollToSection('pricing-section')}>Video Editing</FooterLink>
            <FooterLink onClick={() => scrollToSection('pricing-section')}>SEO Optimization</FooterLink>
          </Grid>
          
          {/* Company */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            <FooterLink onClick={() => scrollToSection('home-section')}>About Us</FooterLink>
            <FooterLink onClick={() => scrollToSection('home-section')}>Our Team</FooterLink>
            <FooterLink onClick={() => scrollToSection('home-section')}>Careers</FooterLink>
            <FooterLink onClick={() => scrollToSection('contact-section')}>Contact Us</FooterLink>
          </Grid>
          
          {/* Support */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Support
            </Typography>
            <FooterLink onClick={() => scrollToSection('home-section')}>Help Center</FooterLink>
            <FooterLink onClick={() => scrollToSection('home-section')}>FAQ</FooterLink>
            <FooterLink onClick={() => scrollToSection('home-section')}>Privacy Policy</FooterLink>
            <FooterLink onClick={() => scrollToSection('home-section')}>Terms of Service</FooterLink>
          </Grid>
          
          {/* Contact */}
          <Grid item xs={12} sm={8} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
             Mussoorie, Uttarakhand
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
              India
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
              +91 8057839525
            </Typography>
          </Grid>
        </Grid>
        
        {/* Trust badges */}
        <Box sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
          <Typography variant="subtitle2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
            Trusted By Many Leaders
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 4, 
            flexWrap: 'wrap',
            '& > div': {
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }
          }}>
            <Box>
              <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'trust.main' }} />
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>Secure Payments</Typography>
            </Box>
            <Box>
              <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'trust.secondary' }} />
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>24/7 Support</Typography>
            </Box>
            <Box>
              <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'trust.accent' }} />
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>100% Satisfaction</Typography>
            </Box>
          </Box>
        </Box>
        
        {/* Copyright */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {currentYear} Voxel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;