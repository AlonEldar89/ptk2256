import React from 'react';
import { Box, Grid, Paper } from '@mui/material';

interface BuildingCFloorPlanProps {
  onApartmentClick: (apartment: string) => void;
  selectedApartment: string | null;
}

const BuildingCFloorPlan: React.FC<BuildingCFloorPlanProps> = ({
  onApartmentClick,
  selectedApartment,
}) => {
  const apartments = ['C1', 'C2', 'C3', 'C4', 'C5'];

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Grid container spacing={2}>
        {apartments.map((apt) => (
          <Grid 
            item 
            xs={selectedApartment === apt ? 12 : 6} 
            sm={selectedApartment === apt ? 12 : 4} 
            md={selectedApartment === apt ? 8 : 4} 
            key={apt}
            sx={{
              transition: 'all 0.3s ease-in-out',
              transform: selectedApartment === apt ? 'scale(1)' : 'scale(0.8)',
              opacity: selectedApartment && selectedApartment !== apt ? 0.7 : 1,
            }}
          >
            <Paper
              elevation={selectedApartment === apt ? 6 : 2}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                border: selectedApartment === apt ? '2px solid #4CAF50' : 'none',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
              onClick={() => onApartmentClick(apt)}
            >
              <img
                src={`/floor-plans/building-c/${apt}.jpg`}
                alt={`Floor plan for ${apt}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: selectedApartment === apt ? 'rgba(76, 175, 80, 0.2)' : 'transparent',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  {apt}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BuildingCFloorPlan; 