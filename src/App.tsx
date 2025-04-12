import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Typography, Paper } from '@mui/material';
import BuildingSelector from './components/BuildingSelector';
import FloorPlanViewer from './components/FloorPlanViewer';
import ApartmentDetails from './components/ApartmentDetails';
import ProjectOverview from './components/ProjectOverview';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Rubik, Arial, sans-serif',
  },
});

// Apartment pricing data
const apartmentPrices: Record<string, { price: string; size: string; count: number }> = {
  // Building A
  'A1': { price: '1.73m - 1.86m ₪', size: '115 מ"ר', count: 12 },
  'A2': { price: '1.47m - 1.56m ₪', size: '100 מ"ר', count: 12 },
  'A3': { price: '1.14m - 1.20m ₪', size: '80 מ"ר', count: 12 },
  'A4': { price: '1.11m - 1.17m ₪', size: '78 מ"ר', count: 12 },
  'A5': { price: '1.47m- 1.56m ₪', size: '100 מ"ר', count: 12 },
  'A6': { price: '1.47m- 1.56m ₪', size: '100 מ"ר', count: 12 },

  // Building B
  'B1': { price: '1.55m ₪', size: '100 מ"ר', count: 7 },
  'B2': { price: '1.55m ₪', size: '100 מ"ר', count: 7 },
  'B3': { price: '1.06m ₪', size: '70 מ"ר', count: 7 },
  'B4': { price: '1.06m ₪', size: '70 מ"ר', count: 7 },
  'B5': { price: '1.64m ₪', size: '105 מ"ר', count: 7 },

  // Building C
  'C1': { price: '1.55m ₪', size: '100 מ"ר', count: 7 },
  'C2': { price: '1.55m ₪', size: '100 מ"ר', count: 7 },
  'C3': { price: '1.06m ₪', size: '70 מ"ר', count: 7 },
  'C4': { price: '1.06m ₪', size: '70 מ"ר', count: 7 },
  'C5': { price: '1.64m ₪', size: '105 מ"ר', count: 7 },

  // Building D
  'D1': { price: '1.55m ₪', size: '100 מ"ר', count: 7 },
  'D2': { price: '1.55m ₪', size: '100 מ"ר', count: 7 },
  'D3': { price: '1.06m ₪', size: '70 מ"ר', count: 7 },
  'D4': { price: '1.06m ₪', size: '70 מ"ר', count: 7 },
  'D5': { price: '1.64m ₪', size: '105 מ"ר', count: 7 },
};

function App() {
  const [selectedBuilding, setSelectedBuilding] = React.useState<string | null>(null);
  const [selectedApartment, setSelectedApartment] = React.useState<string | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            זוכי הגרלת 2256 אלקטרה סירקין
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 3,
          }}>
            {/* Right side - Building selector and price info */}
            <Box sx={{ 
              flex: { xs: '1', md: '0.4' },
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}>
              <BuildingSelector
                onBuildingSelect={setSelectedBuilding}
                selectedBuilding={selectedBuilding}
              />
              
              {selectedApartment && apartmentPrices[selectedApartment] && (
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 2,
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #e0e0e0'
                  }}
                >
                  <Typography variant="h6" gutterBottom align="center">
                    מחיר דירה {selectedApartment}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    gap: 1 
                  }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', direction: 'rtl' }}>
                      {apartmentPrices[selectedApartment].price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', direction: 'rtl' }}>
                      גודל: {apartmentPrices[selectedApartment].size}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', direction: 'rtl' }}>
                      מספר דירות: {apartmentPrices[selectedApartment].count}
                    </Typography>
                  </Box>
                </Paper>
              )}
            </Box>

            {/* Left side - Overview or Floor plan */}
            <Box sx={{ flex: { xs: '1', md: '0.6' } }}>
              {!selectedBuilding ? (
                <ProjectOverview visible={true} />
              ) : (
                <FloorPlanViewer
                  building={selectedBuilding}
                  onApartmentSelect={setSelectedApartment}
                  selectedApartment={selectedApartment}
                />
              )}
            </Box>
          </Box>

          {selectedApartment && (
            <Box sx={{ mt: 3 }}>
              <ApartmentDetails
                building={selectedBuilding!}
                apartment={selectedApartment}
              />
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App; 