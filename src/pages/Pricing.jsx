import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportIcon from '@mui/icons-material/Support';

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #0d3c6e 100%)`,
  color: '#fff',
  padding: '120px 0 80px',
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

const PricingCard = styled(Card)(({ theme, featured }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  position: 'relative',
  overflow: 'hidden',
  border: featured ? `2px solid ${theme.palette.secondary.main}` : 'none',
  borderRadius: '16px',
  boxShadow: featured ? '0 10px 30px rgba(33, 150, 243, 0.15)' : '0 8px 20px rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-16px)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.18)',
  },
  '&::before': featured ? {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #2196f3, #4CAF50)',
  } : {},
}));

const FeatureItem = styled(Box)(({ theme, included }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  color: included ? theme.palette.text.primary : theme.palette.text.secondary,
  opacity: included ? 1 : 0.7,
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: included ? 'translateX(5px)' : 'none',
  },
}));

const FeaturedBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  right: -35,
  background: 'linear-gradient(90deg, #2196f3, #1976d2)',
  color: '#fff',
  padding: '8px 40px',
  transform: 'rotate(45deg)',
  transformOrigin: 'center',
  width: 170,
  textAlign: 'center',
  fontWeight: 700,
  fontSize: '0.85rem',
  zIndex: 1,
  boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
  letterSpacing: '1px',
  border: '1px solid rgba(255, 255, 255, 0.3)',
}));

const PriceHighlight = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '5px',
    left: '0',
    width: '100%',
    height: '8px',
    backgroundColor: alpha(theme.palette.secondary.main, 0.3),
    zIndex: -1,
    borderRadius: '4px',
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`pricing-tabpanel-${index}`}
      aria-labelledby={`pricing-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

function Pricing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tabValue, setTabValue] = useState(0);

  // Define pricing plans for each service category
  const pricingCategories = [
    {
      id: 'web',
      name: 'Web Development',
      plans: [
        {
          title: 'Basic',
          price: 5000,
          description: 'Perfect for small businesses just getting started with their online presence.',
          features: [
            { text: 'Responsive Website Design', included: true },
            { text: '5 Pages', included: true },
            { text: 'Contact Form', included: true },
            { text: 'Basic SEO Setup', included: true },
            { text: 'Content Management System', included: false },
            { text: 'E-commerce Functionality', included: false },
            { text: 'Custom Animations', included: false },
            { text: 'Premium Support', included: false },
          ],
          featured: false,
          cta: 'Get Started',
          icon: <SpeedIcon />,
        },
        {
          title: 'Standard',
          price: 8500,
          description: 'Ideal for growing businesses that need more functionality and features.',
          features: [
            { text: 'Responsive Website Design', included: true },
            { text: 'Up to 10 Pages', included: true },
            { text: 'Contact Form', included: true },
            { text: 'Advanced SEO Setup', included: true },
            { text: 'Content Management System', included: true },
            { text: 'Basic E-commerce (up to 30 products)', included: true },
            { text: 'Custom Animations', included: false },
            { text: 'Premium Support', included: false },
          ],
          featured: true,
          cta: 'Most Popular',
          icon: <LocalOfferIcon />,
        },
        {
          title: 'Premium',
          price: 11000,
          description: 'Comprehensive solution for established businesses requiring advanced features.',
          features: [
            { text: 'Responsive Website Design', included: true },
            { text: 'Unlimited Pages', included: true },
            { text: 'Advanced Contact Forms', included: true },
            { text: 'Comprehensive SEO Strategy', included: true },
            { text: 'Advanced Content Management', included: true },
            { text: 'Full E-commerce Functionality', included: true },
            { text: 'Custom Animations & Interactions', included: true },
            { text: '24/7 Premium Support', included: true },
          ],
          featured: false,
          cta: 'Get Started',
          icon: <SupportIcon />,
        },
      ],
    },
    {
      id: 'marketing',
      name: 'Digital Marketing',
      plans: [
        {
          title: 'Basic',
          price: 4500,
          description: 'Essential digital marketing services to establish your online presence.',
          features: [
            { text: 'Social Media Management (2 platforms)', included: true },
            { text: 'Monthly Content Calendar', included: true },
            { text: 'Basic SEO Optimization', included: true },
            { text: '2 Blog Posts per Month', included: true },
            { text: 'PPC Campaign Management', included: false },
            { text: 'Email Marketing Campaigns', included: false },
            { text: 'Competitor Analysis', included: false },
            { text: 'Monthly Performance Reports', included: false },
          ],
          featured: false,
          cta: 'Get Started',
          icon: <SpeedIcon />,
        },
        {
          title: 'Standard',
          price: 7500,
          description: 'Comprehensive marketing strategy for businesses looking to grow their audience.',
          features: [
            { text: 'Social Media Management (4 platforms)', included: true },
            { text: 'Monthly Content Calendar', included: true },
            { text: 'Advanced SEO Optimization', included: true },
            { text: '4 Blog Posts per Month', included: true },
            { text: 'Basic PPC Campaign Management', included: true },
            { text: 'Email Marketing Campaigns', included: true },
            { text: 'Competitor Analysis', included: false },
            { text: 'Monthly Performance Reports', included: true },
          ],
          featured: true,
          cta: 'Most Popular',
          icon: <LocalOfferIcon />,
        },
        {
          title: 'Premium',
          price: 9500,
          description: 'All-inclusive marketing solution for maximum online visibility and engagement.',
          features: [
            { text: 'Social Media Management (All platforms)', included: true },
            { text: 'Advanced Content Strategy', included: true },
            { text: 'Comprehensive SEO Strategy', included: true },
            { text: '8 Blog Posts per Month', included: true },
            { text: 'Advanced PPC Campaign Management', included: true },
            { text: 'Email Marketing Automation', included: true },
            { text: 'In-depth Competitor Analysis', included: true },
            { text: 'Weekly Performance Reports', included: true },
          ],
          featured: false,
          cta: 'Get Started',
          icon: <SupportIcon />,
        },
      ],
    },
    {
      id: 'video',
      name: 'Video Editing',
      plans: [
        {
          title: 'Basic',
          price: 450 ,
          description: 'Essential video editing services for simple projects and social media content.',
          features: [
            { text: 'Basic Video Editing', included: true },
            { text: 'Up to 3 minutes of content', included: true },
            { text: 'Text Overlays', included: true },
            { text: 'Background Music', included: true },
            { text: 'Motion Graphics', included: false },
            { text: 'Color Grading', included: false },
            { text: 'Custom Animations', included: false },
            { text: 'Rush Delivery', included: false },
          ],
          featured: false,
          cta: 'Get Started',
          icon: <SpeedIcon />,
        },
        {
          title: 'Standard',
          price: 750,
          description: 'Professional video editing for marketing videos and promotional content.',
          features: [
            { text: 'Advanced Video Editing', included: true },
            { text: 'Up to 10 minutes of content', included: true },
            { text: 'Text Overlays & Titles', included: true },
            { text: 'Premium Background Music', included: true },
            { text: 'Basic Motion Graphics', included: true },
            { text: 'Color Grading', included: true },
            { text: 'Custom Animations', included: false },
            { text: 'Rush Delivery', included: false },
          ],
          featured: true,
          cta: 'Most Popular',
          icon: <LocalOfferIcon />,
        },
        {
          title: 'Premium',
          price: 1300,
          description: 'High-end video production and editing for professional brand videos.',
          features: [
            { text: 'Professional Video Editing', included: true },
            { text: 'Unlimited Content Length', included: true },
            { text: 'Advanced Titles & Graphics', included: true },
            { text: 'Licensed Music Library Access', included: true },
            { text: 'Advanced Motion Graphics', included: true },
            { text: 'Professional Color Grading', included: true },
            { text: 'Custom Animations & Effects', included: true },
            { text: 'Rush Delivery Option', included: true },
          ],
          featured: false,
          cta: 'Get Started',
          icon: <SupportIcon />,
        },
      ],
    },
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter plans based on search term
  const filterPlans = (plans) => {
    if (!searchTerm) return plans;
    
    return plans.filter(plan => {
      // Check if plan title, description or any feature matches the search term
      return (
        plan.title.toLowerCase().includes(searchTerm) ||
        plan.description.toLowerCase().includes(searchTerm) ||
        plan.features.some(feature => 
          feature.text.toLowerCase().includes(searchTerm)
        )
      );
    });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 2, py: 3 }}>
            <Typography variant="h2" component="h1" sx={{ mb: 3, fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              <PriceHighlight>Transparent Pricing</PriceHighlight> for All Your Digital Needs
            </Typography>
            <Typography variant="h5" sx={{ mb: 5, fontWeight: 400, opacity: 0.9, maxWidth: 800, mx: 'auto', lineHeight: 1.5 }}>
              Choose the perfect plan that fits your business requirements and budget.
            </Typography>
            
            {/* Search Bar */}
            <Box sx={{ maxWidth: 500, mx: 'auto', mb: 4 }}>
              <TextField
                fullWidth
                placeholder="Search for features..."
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'white' }} />
                    </InputAdornment>
                  ),
                  sx: { 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: 2,
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  }
                }}
                inputProps={{
                  sx: { color: 'white' }
                }}
              />
            </Box>
            
            {/* Service Category Tabs */}
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange}
              centered
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: 'white',
                  height: '3px',
                  borderRadius: '3px',
                },
                '& .MuiTab-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  mx: 1,
                  '&.Mui-selected': {
                    color: 'white',
                    fontWeight: 600,
                  },
                },
              }}
            >
              {pricingCategories.map((category, index) => (
                <Tab key={category.id} label={category.name} id={`pricing-tab-${index}`} />
              ))}
            </Tabs>
          </Box>
        </Container>
      </HeroSection>

      {/* Pricing Plans */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f9fafb' }}>
        <Container maxWidth="lg">
          {pricingCategories.map((category, index) => (
            <TabPanel key={category.id} value={tabValue} index={index}>
              {searchTerm && filterPlans(category.plans).length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="h6" color="text.secondary">
                    No plans match your search criteria. Please try a different search term.
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  justifyContent: 'center',
                  gap: 4,
                  mx: 'auto'
                }}>
                  {filterPlans(category.plans).map((plan, planIndex) => (
                    <Box 
                      key={`${category.id}-${planIndex}`}
                      sx={{
                        width: { xs: '100%', md: '30%' },
                        minWidth: { xs: '280px', md: '320px' },
                        maxWidth: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'translateY(-10px)' }
                      }}
                    >
                      <PricingCard featured={plan.featured} elevation={plan.featured ? 10 : 2}>
                        {plan.featured && <FeaturedBadge>MOST POPULAR</FeaturedBadge>}
                        <CardContent sx={{ p: { xs: 4, md: 5 }, flexGrow: 1 }}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 3,
                            '& svg': { 
                              color: plan.featured ? 'secondary.main' : 'primary.main',
                              fontSize: 28,
                              mr: 1.5
                            }
                          }}>
                            {plan.icon}
                            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                              {plan.title}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                            <Typography variant="h3" component="span" sx={{ 
                              fontWeight: 800, 
                              color: plan.featured ? 'secondary.main' : 'primary.main',
                              fontSize: { xs: '2.5rem', md: '3rem' }
                            }}>
                              ₹{plan.price}
                            </Typography>
                            <Typography variant="body1" component="span" sx={{ ml: 1, color: 'text.secondary' }}>
                              /project
                            </Typography>
                          </Box>
                          
                          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6, minHeight: '80px' }}>
                            {plan.description}
                          </Typography>
                          
                          <Divider sx={{ my: 3 }} />
                          
                          <Typography variant="subtitle2" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
                            FEATURES INCLUDED:
                          </Typography>
                          
                          <Box sx={{ mb: 4 }}>
                            {plan.features.map((feature, featureIndex) => (
                              <FeatureItem key={featureIndex} included={feature.included}>
                                {feature.included ? (
                                  <CheckIcon sx={{ 
                                    color: 'success.main', 
                                    mr: 1.5,
                                    backgroundColor: alpha('#4caf50', 0.1),
                                    borderRadius: '50%',
                                    p: 0.5,
                                  }} />
                                ) : (
                                  <CloseIcon sx={{ 
                                    color: 'text.disabled', 
                                    mr: 1.5,
                                    backgroundColor: alpha('#bdbdbd', 0.1),
                                    borderRadius: '50%',
                                    p: 0.5,
                                  }} />
                                )}
                                <Typography variant="body2" sx={{ fontWeight: feature.included ? 500 : 400 }}>
                                  {feature.text}
                                </Typography>
                              </FeatureItem>
                            ))}
                          </Box>

                          {/* Additional details section */}
                          <Box sx={{ mt: 3, mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
                              DELIVERY DETAILS:
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                              <Typography variant="body2">
                                <strong>Turnaround Time:</strong> {plan.title === 'Basic' ? '7-10 days' : plan.title === 'Standard' ? '5-7 days' : '3-5 days'}
                              </Typography>
                              <Typography variant="body2">
                                <strong>Revisions:</strong> {plan.title === 'Basic' ? '2 rounds' : plan.title === 'Standard' ? '3 rounds' : 'Unlimited'}
                              </Typography>
                              <Typography variant="body2">
                                <strong>Support:</strong> {plan.title === 'Basic' ? 'Email' : plan.title === 'Standard' ? 'Email & Chat' : '24/7 Priority'}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                        
                        <CardActions sx={{ p: 4, pt: 0, justifyContent: 'center' }}>
                          <Button 
                            variant={plan.featured ? "contained" : "outlined"}
                            color={plan.featured ? "secondary" : "primary"}
                            size="large"
                            fullWidth
                            onClick={() => {
                              document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
                            }}
                            sx={{ 
                              py: 1.5,
                              borderRadius: '30px',
                              fontWeight: 600,
                              boxShadow: plan.featured ? '0 8px 20px rgba(33, 150, 243, 0.3)' : 'none',
                              position: 'relative',
                              overflow: 'hidden',
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
                            }}
                          >
                            {plan.cta}
                          </Button>
                        </CardActions>
                      </PricingCard>
                    </Box>
                  ))}
                </Box>
              )}
            </TabPanel>
          ))}
          
          {/* Additional Info */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
              Need a Custom Solution?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
              We understand that every business is unique. Contact us for a tailored solution that meets your specific requirements.
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              size="large"
              onClick={() => {
                document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
              }}
              sx={{ 
                px: 4, 
                py: 1.5,
                borderRadius: '30px',
                boxShadow: '0 8px 20px rgba(44, 62, 80, 0.2)',
              }}
            >
              Contact Us for Custom Quote
            </Button>
          </Box>

          {/* FAQ Section */}
          <Box sx={{ mt: 12, mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                textAlign: 'center',
                mb: 6,
                position: 'relative',
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
              Frequently Asked Questions
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ mb: 3, borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      How long does it take to complete a project?
                    </Typography>
                    <Typography variant="body1">
                      Project timelines vary based on complexity and scope. Typically, a basic website takes 1-2 weeks, standard projects 2-4 weeks, and premium projects 4-8 weeks. We'll provide a detailed timeline during our initial consultation.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ mb: 3, borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      Do you offer ongoing maintenance and support?
                    </Typography>
                    <Typography variant="body1">
                      Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally. Our support team is available to address any issues or make updates as needed.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      What payment methods do you accept?
                    </Typography>
                    <Typography variant="body1">
                      We accept credit/debit cards, PayPal, bank transfers, and cryptocurrency. For larger projects, we typically require a 50% deposit upfront with the remaining balance due upon completion.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ mb: 3, borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      Can I upgrade my plan later?
                    </Typography>
                    <Typography variant="body1">
                      Absolutely! You can upgrade your plan at any time. We'll simply calculate the difference in cost and apply it to your upgrade. This flexibility ensures your digital solutions can grow with your business.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ mb: 3, borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      Do you provide content for websites?
                    </Typography>
                    <Typography variant="body1">
                      We offer professional copywriting services for an additional fee. Our content team can create engaging, SEO-optimized content for your website, blog posts, and marketing materials that aligns with your brand voice.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      How do we get started with a project?
                    </Typography>
                    <Typography variant="body1">
                      Getting started is easy! Simply contact us through our contact form, and we'll schedule an initial consultation to discuss your project requirements, timeline, and budget. Once we have a clear understanding of your needs, we'll provide a detailed proposal.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Pricing;
