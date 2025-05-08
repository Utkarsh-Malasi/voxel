import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// Icons
import CodeIcon from '@mui/icons-material/Code';
import CampaignIcon from '@mui/icons-material/Campaign';
import VideocamIcon from '@mui/icons-material/Videocam';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Import logo
import logo from '../images/homeBg.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  padding: '160px 0 120px',  // Increased padding for more spacious hero section
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: 'linear-gradient(90deg, #2196f3, #4CAF50, #FFC107)',
    zIndex: 3
  }
}));

const HeroOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'url("/src/images/pattern.png")',
  opacity: 0.1,
  zIndex: 1,
});

// Enhanced service card styling
const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
    '& .service-icon-wrapper': {
      transform: 'scale(1.1)',
    },
  },
}));

const ServiceIconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  width: '90px',
  height: '90px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  transition: 'transform 0.3s ease',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  position: 'relative',
  zIndex: 1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-8px',
    left: '-8px',
    right: '-8px',
    bottom: '-8px',
    borderRadius: '50%',
    border: `2px dashed ${theme.palette.secondary.main}`,
    opacity: 0.6,
    zIndex: -1,
  },
  '& svg': {
    fontSize: 40,
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const StatsBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
  textAlign: 'center',
}));

function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7} className="animate-fade-in">
              <Box sx={{
                backgroundColor: 'rgba(244, 244, 245, 0.65)',
                borderRadius: '16px',
                p: { xs: 3, md: 4 },
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}>
                <Typography 
                  variant="h1" 
                  component="h1" 
                  sx={{ 
                    color: 'primary.dark',
                    mb: 2, 
                    fontWeight: 800, 
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    lineHeight: 1.2,
                  }}
                >
                  Professional Digital Services for Your Business
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'text.primary',
                    mb: 4, 
                    fontWeight: 500, 
                    opacity: 0.9,
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.25rem' },
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  We help businesses grow with cutting-edge web development, strategic digital marketing, and professional video editing.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    onClick={() => {
                      document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' });
                    }}
                    sx={{ 
                      px: { xs: 3, md: 4 }, 
                      py: { xs: 1.2, md: 1.5 }, 
                      backgroundColor: 'secondary.main',
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      boxShadow: '0 4px 14px rgba(33, 150, 243, 0.4)',
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                        boxShadow: '0 6px 20px rgba(33, 150, 243, 0.6)',
                      }
                    }}
                  >
                    View Our Services
                  </Button>
                  <Button 
                    variant="contained" 
                    size="large"
                    onClick={() => {
                      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
                    }}
                    sx={{ 
                      px: { xs: 3, md: 4 }, 
                      py: { xs: 1.2, md: 1.5 }, 
                      backgroundColor: 'accent.main',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      boxShadow: '0 4px 14px rgba(255, 107, 74, 0.4)',
                      '&:hover': {
                        backgroundColor: 'accent.dark',
                        boxShadow: '0 6px 20px rgba(255, 107, 74, 0.6)',
                      }
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </Grid>
          
          </Grid>
        </Container>
      </HeroSection>

      {/* Services Section - Enhanced with innovative design */}
      <Box sx={{ py: 12, backgroundColor: '#f8f9fa', position: 'relative', overflow: 'hidden' }}>
        {/* Background decoration elements */}
        <Box sx={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52,152,219,0.1) 0%, rgba(52,152,219,0) 70%)',
          zIndex: 0
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(231,76,60,0.08) 0%, rgba(231,76,60,0) 70%)',
          zIndex: 0
        }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 3,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  backgroundColor: 'secondary.main',
                  borderRadius: '2px'
                }
              }}
            >
              Our Services
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 800, 
                mx: 'auto',
                lineHeight: 1.8
              }}
            >
              We provide comprehensive digital solutions to help your business thrive in the digital landscape.
            </Typography>
          </Box>
          
          {/* Interactive Service Cards with Hover Effects */}
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: { xs: 4, md: 5 },
            mb: 8
          }}>
            {/* Web Development */}
            <Box sx={{ 
              width: { xs: '100%', sm: '45%', md: '30%' },
              minWidth: '280px',
              maxWidth: '380px',
              position: 'relative',
              transition: 'transform 0.4s ease',
              '&:hover': { transform: 'translateY(-15px)' }
            }}>
              <ServiceCard>
                <CardContent sx={{ p: 5, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <ServiceIconWrapper className="service-icon-wrapper">
                    <CodeIcon />
                  </ServiceIconWrapper>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    Web Development
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    From simple landing pages to complex web applications, we build responsive and user-friendly websites.
                  </Typography>
                  
                  {/* Service Features */}
                  <Box sx={{ 
                    mt: 3, 
                    mb: 4, 
                    textAlign: 'left', 
                    backgroundColor: 'rgba(52,152,219,0.05)', 
                    p: 2, 
                    borderRadius: 2,
                    flexGrow: 1
                  }}>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      What we offer:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">Responsive Website Design</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">E-commerce Solutions</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">Custom Web Applications</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">CMS Integration</Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Button 
                      variant="contained" 
                      color="secondary"
                      size="large"
                      onClick={() => {
                        document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' });
                      }}
                      sx={{ 
                        borderRadius: '30px',
                        px: 3,
                        boxShadow: '0 8px 15px rgba(52, 152, 219, 0.3)'
                      }}
                    >
                      View Pricing
                    </Button>
                  </Box>
                </CardContent>
              </ServiceCard>
            </Box>
            
            {/* Digital Marketing */}
            <Box sx={{ 
              width: { xs: '100%', sm: '45%', md: '30%' },
              minWidth: '280px',
              maxWidth: '380px',
              position: 'relative',
              transition: 'transform 0.4s ease',
              '&:hover': { transform: 'translateY(-15px)' }
            }}>
              <ServiceCard>
                <CardContent sx={{ p: 5, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <ServiceIconWrapper className="service-icon-wrapper">
                    <CampaignIcon />
                  </ServiceIconWrapper>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    Digital Marketing
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    Boost your online presence with our strategic SEO, social media, and content marketing services.
                  </Typography>
                  
                  {/* Service Features */}
                  <Box sx={{ 
                    mt: 3, 
                    mb: 4, 
                    textAlign: 'left', 
                    backgroundColor: 'rgba(52,152,219,0.05)', 
                    p: 2, 
                    borderRadius: 2,
                    flexGrow: 1
                  }}>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      What we offer:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">SEO Optimization</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">Social Media Management</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">Content Marketing</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">PPC Campaigns</Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Button 
                      variant="contained" 
                      color="secondary"
                      size="large"
                      onClick={() => {
                        document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' });
                      }}
                      sx={{ 
                        borderRadius: '30px',
                        px: 3,
                        boxShadow: '0 8px 15px rgba(52, 152, 219, 0.3)'
                      }}
                    >
                      View Pricing
                    </Button>
                  </Box>
                </CardContent>
              </ServiceCard>
            </Box>
            
            {/* Video Editing */}
            <Box sx={{ 
              width: { xs: '100%', sm: '45%', md: '30%' },
              minWidth: '280px',
              maxWidth: '380px',
              position: 'relative',
              transition: 'transform 0.4s ease',
              '&:hover': { transform: 'translateY(-15px)' }
            }}>
              <ServiceCard>
                <CardContent sx={{ p: 5, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <ServiceIconWrapper className="service-icon-wrapper">
                    <VideocamIcon />
                  </ServiceIconWrapper>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    Video Editing
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    Create engaging video content for your brand with our professional video editing and production services.
                  </Typography>
                  
                  {/* Service Features */}
                  <Box sx={{ 
                    mt: 3, 
                    mb: 4, 
                    textAlign: 'left', 
                    backgroundColor: 'rgba(52,152,219,0.05)', 
                    p: 2, 
                    borderRadius: 2,
                    flexGrow: 1
                  }}>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      What we offer:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">Professional Editing</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">Motion Graphics</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">Color Grading</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">Sound Design</Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Button 
                      variant="contained" 
                      color="secondary"
                      size="large"
                      onClick={() => {
                        document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' });
                      }}
                      sx={{ 
                        borderRadius: '30px',
                        px: 3,
                        boxShadow: '0 8px 15px rgba(52, 152, 219, 0.3)'
                      }}
                    >
                      View Pricing
                    </Button>
                  </Box>
                </CardContent>
              </ServiceCard>
            </Box>
          </Box>
          
          {/* Why Choose Us Section */}
          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Typography variant="h3" component="h3" sx={{ mb: 5, fontWeight: 600 }}>
              Why Choose Us
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-10px)' }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    backgroundColor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    boxShadow: '0 8px 20px rgba(44, 62, 80, 0.15)'
                  }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>1</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Expertise
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our team consists of industry experts with years of experience in their respective fields.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-10px)' }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    backgroundColor: 'secondary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    boxShadow: '0 8px 20px rgba(52, 152, 219, 0.15)'
                  }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>2</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Quality
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We never compromise on quality, delivering exceptional results that exceed expectations.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-10px)' }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    backgroundColor: 'accent.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    boxShadow: '0 8px 20px rgba(231, 76, 60, 0.15)'
                  }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>3</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We provide ongoing support and maintenance to ensure your digital assets perform optimally.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-10px)' }
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    backgroundColor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    boxShadow: '0 8px 20px rgba(44, 62, 80, 0.15)'
                  }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>4</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Innovation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We stay ahead of industry trends to deliver cutting-edge solutions for your business.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Rest of the Home page content */}
      {/* ... */}
    </>
  );
}

export default Home;