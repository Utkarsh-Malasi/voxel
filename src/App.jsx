import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1a4f8a', // Deeper blue for trust and professionalism
        light: '#2c6cb0',
        dark: '#0d3c6e',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#2196f3', // Brighter blue for interactive elements
        light: '#64b5f6',
        dark: '#0d47a1',
        contrastText: '#ffffff',
      },
      accent: {
        main: '#ff6b4a', // Warmer accent for calls to action
        light: '#ff8a70',
        dark: '#e64a19',
        contrastText: '#ffffff',
      },
      success: {
        main: '#4caf50', // Green for success indicators
        dark: '#388e3c',
        light: '#81c784',
        contrastText: '#ffffff',
      },
      background: {
        default: '#ffffff',
        paper: '#f8f9fa',
      },
      trust: {
        main: '#4CAF50', // Green for trust indicators
        secondary: '#1976d2', // Trust blue
        accent: '#FFC107', // Gold for premium/quality indicators
      },
      text: {
        primary: '#212121',
        secondary: '#616161',
      },
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      h1: {
        fontWeight: 700,
        letterSpacing: '-0.5px',
      },
      h2: {
        fontWeight: 600,
        letterSpacing: '-0.25px',
      },
      h3: {
        fontWeight: 600,
        letterSpacing: '0',
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
      subtitle1: {
        fontWeight: 500,
      },
      button: {
        fontWeight: 500,
        letterSpacing: '0.5px',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
            },
          },
          containedPrimary: {
            background: 'linear-gradient(135deg, #1a4f8a 0%, #2c6cb0 100%)',
          },
          containedSecondary: {
            background: 'linear-gradient(135deg, #2196f3 0%, #64b5f6 100%)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Header />
        <main className="main-content">
          <div id="home-section">
            <Home />
          </div>
          <div id="pricing-section">
            <Pricing />
          </div>
          <div id="contact-section">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
