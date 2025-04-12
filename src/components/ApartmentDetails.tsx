import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';

interface ApartmentDetailsProps {
  building: string;
  apartment: string;
}

interface PricingFormula {
  basePrice: number;
  sizeMultiplier: number;
  floorMultiplier: number;
}

const pricingFormulas: Record<string, Record<string, PricingFormula>> = {
  A: {
    '101': { basePrice: 1500, sizeMultiplier: 1.2, floorMultiplier: 1.0 },
    '102': { basePrice: 1600, sizeMultiplier: 1.3, floorMultiplier: 1.0 },
    // Add more apartments as needed
  },
  B: {
    '201': { basePrice: 1700, sizeMultiplier: 1.4, floorMultiplier: 1.1 },
    '202': { basePrice: 1800, sizeMultiplier: 1.5, floorMultiplier: 1.1 },
    // Add more apartments as needed
  },
  C: {
    '301': { basePrice: 1900, sizeMultiplier: 1.6, floorMultiplier: 1.2 },
    '302': { basePrice: 2000, sizeMultiplier: 1.7, floorMultiplier: 1.2 },
    // Add more apartments as needed
  },
  D: {
    '401': { basePrice: 2100, sizeMultiplier: 1.8, floorMultiplier: 1.3 },
    '402': { basePrice: 2200, sizeMultiplier: 1.9, floorMultiplier: 1.3 },
    // Add more apartments as needed
  },
};

const ApartmentDetails: React.FC<ApartmentDetailsProps> = ({ building, apartment }) => {
  const formula = pricingFormulas[building]?.[apartment];
  
  if (!formula) {
    return (
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" color="error">
          המחיר מחושב לפי הנוסחא של מחיר מטרה, ומניח חניה אחת ומחסן בגודל 4 מר לכל דירה.
        </Typography>
      </Paper>
    );
  }

  const calculatePrice = (size: number, floor: number) => {
    return formula.basePrice * formula.sizeMultiplier * (formula.floorMultiplier * floor);
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Apartment {apartment} Details
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Pricing Formula
            </Typography>
            <Typography>
              Base Price: ${formula.basePrice}
            </Typography>
            <Typography>
              Size Multiplier: {formula.sizeMultiplier}x
            </Typography>
            <Typography>
              Floor Multiplier: {formula.floorMultiplier}x per floor
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Example Calculations
            </Typography>
            <Typography>
              800 sq ft on 1st floor: ${calculatePrice(800, 1).toFixed(2)}
            </Typography>
            <Typography>
              800 sq ft on 2nd floor: ${calculatePrice(800, 2).toFixed(2)}
            </Typography>
            <Typography>
              1000 sq ft on 1st floor: ${calculatePrice(1000, 1).toFixed(2)}
            </Typography>
            <Typography>
              1000 sq ft on 2nd floor: ${calculatePrice(1000, 2).toFixed(2)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ApartmentDetails; 