import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

// Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #0d3c6e 100%)`,
  color: '#fff',
  padding: '100px 0 60px',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #2196f3, #4CAF50, #FFC107)',
    zIndex: 3
  }
}));

const ContactCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(33, 150, 243, 0.1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(33, 150, 243, 0.15)',
  },
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginRight: theme.spacing(2),
  marginTop: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(33, 150, 243, 0.1)',
  boxShadow: '0 4px 8px rgba(33, 150, 243, 0.15)',
}));

const SocialButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '10px 20px',
  margin: '8px',
  transition: 'all 0.3s ease',
  fontWeight: 500,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s ease',
  },
  '&:hover::after': {
    transform: 'translateX(100%)',
  }
}));

const SocialIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

const ContactMethodCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  borderRadius: '16px',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
}));

function Contact() {
  // Social media links
  const socialLinks = [
    { name: 'WhatsApp', icon: <WhatsAppIcon />, color: '#25D366', url: 'https://wa.me/918057839525' },
    { name: 'Telegram', icon: <TelegramIcon />, color: '#0088cc', url: 'https://t.me/utkarshmalasi' },
    { name: 'Instagram', icon: <InstagramIcon />, color: '#E1306C', url: 'https://instagram.com/voxel_rise_and_shine' },
    { name: 'Facebook', icon: <FacebookIcon />, color: '#1877F2', url: 'https://www.facebook.com/profile.php?id=61575943081944&mibexid=rS40aB7S9Ucbxw6v' },
    { name: 'Twitter', icon: <TwitterIcon />, color: '#1DA1F2', url: 'https://twitter.com/voxel' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, color: '#0A66C2', url: 'https://linkedin.com/company/voxel' },
  ];

  // Handle opening social media links
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  // Handle phone call
  const handleCall = () => {
    window.location.href = 'tel:+918057839525';
  };

  // Handle email
  const handleEmail = () => {
    window.location.href = 'mailto:utkarshmalasi@gmail.com';
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
              Get In Touch
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
              Have questions about our services? Ready to start your project? We're here to help!
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Contact Info Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa', position: 'relative' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Main Contact Information */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
                Contact Information
              </Typography>
              
              <ContactCard elevation={3} sx={{ p: 4 }}>
                <CardContent sx={{ p: 0 }}>
                 
                  <ContactInfoItem>
                    <ContactIcon>
                      <PhoneIcon fontSize="large" />
                    </ContactIcon>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Phone
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        +91 8057839525<br />
                        +91 8630559076
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        startIcon={<PhoneIcon />}
                        onClick={handleCall}
                        sx={{ borderRadius: '50px', mt: 1 }}
                      >
                        Call Us Now
                      </Button>
                    </Box>
                  </ContactInfoItem>
                  
                  <ContactInfoItem>
                    <ContactIcon>
                      <EmailIcon fontSize="large" />
                    </ContactIcon>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Email
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        utkarshmalasi@gmail.com
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        startIcon={<EmailIcon />}
                        onClick={handleEmail}
                        sx={{ borderRadius: '50px', mt: 1 }}
                      >
                        Email Us
                      </Button>
                    </Box>
                  </ContactInfoItem>
                  
                  <ContactInfoItem>
                    <ContactIcon>
                      <AccessTimeIcon fontSize="large" />
                    </ContactIcon>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Business Hours
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Only Special Meetings
                      </Typography>
                    </Box>
                  </ContactInfoItem>
                </CardContent>
              </ContactCard>
            </Grid>
            
            {/* Map and Connect with Us */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
                Connect With Us
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
                  Reach out to us directly through your preferred platform
                </Typography>
                
                <Grid container spacing={3}>
                  {socialLinks.slice(0, 3).map((social, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <ContactMethodCard>
                        <Box sx={{ color: social.color, mb: 2 }}>
                          {React.cloneElement(social.icon, { fontSize: 'large' })}
                        </Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          {social.name}
                        </Typography>
                        <Button 
                          variant="contained" 
                          fullWidth
                          sx={{ 
                            backgroundColor: social.color,
                            '&:hover': { backgroundColor: social.color, opacity: 0.9 },
                            borderRadius: '50px'
                          }}
                          onClick={() => handleSocialClick(social.url)}
                        >
                          Connect
                        </Button>
                      </ContactMethodCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={3}>
                  {socialLinks.slice(3).map((social, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <ContactMethodCard>
                        <Box sx={{ color: social.color, mb: 2 }}>
                          {React.cloneElement(social.icon, { fontSize: 'large' })}
                        </Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          {social.name}
                        </Typography>
                        <Button 
                          variant="contained" 
                          fullWidth
                          sx={{ 
                            backgroundColor: social.color,
                            '&:hover': { backgroundColor: social.color, opacity: 0.9 },
                            borderRadius: '50px'
                          }}
                          onClick={() => handleSocialClick(social.url)}
                        >
                          Connect
                        </Button>
                      </ContactMethodCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              
            </Grid>
          </Grid>
          
          {/* Call to Action */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Ready to Start Your Project?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
              Our team is ready to help you bring your vision to life. Reach out to us through any of our contact channels and let's create something amazing together.
            </Typography>
            <Divider sx={{ mb: 4 }} />
            <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
              {socialLinks.map((social, index) => (
                <SocialButton
                  key={index}
                  variant="contained"
                  startIcon={social.icon}
                  onClick={() => handleSocialClick(social.url)}
                  sx={{ 
                    backgroundColor: social.color,
                    '&:hover': { backgroundColor: social.color, opacity: 0.9 }
                  }}
                >
                  {social.name}
                </SocialButton>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Contact;