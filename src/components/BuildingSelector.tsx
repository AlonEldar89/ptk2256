import React, { useState } from 'react';
import { Paper, List, ListItem, ListItemButton, ListItemText, Typography, Box, Grid } from '@mui/material';

interface BuildingSelectorProps {
  onBuildingSelect: (building: string) => void;
  selectedBuilding: string | null;
}

const buildings = ['A', 'B', 'C', 'D'];

const BuildingSelector: React.FC<BuildingSelectorProps> = ({ onBuildingSelect, selectedBuilding }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleBuildingClick = (building: string) => {
    setIsExpanded(false);
    onBuildingSelect(building);
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 2,
        transition: 'all 0.3s ease',
        width: isExpanded ? '100%' : 'auto',
        maxWidth: isExpanded ? '800px' : '300px',
        margin: '0 auto'
      }}
    >
      <Typography variant="h6" gutterBottom align="center" sx={{ mb: 3 }}>
        בחרו בניין
      </Typography>
      {isExpanded ? (
        <Grid container spacing={2}>
          {buildings.map((building) => (
            <Grid item xs={6} key={building}>
              <Box
                onClick={() => handleBuildingClick(building)}
                sx={{
                  cursor: 'pointer',
                  position: 'relative',
                  borderRadius: 1,
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                  }
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/buildings/building_${building.toLowerCase()}.jpg`}
                  alt={`Building ${building}`}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    p: 1,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="subtitle1">
                    Building {building}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <List>
          {buildings.map((building) => (
            <ListItem key={building} disablePadding>
              <ListItemButton
                selected={selectedBuilding === building}
                onClick={() => onBuildingSelect(building)}
              >
                <ListItemText primary={`Building ${building}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default BuildingSelector; 