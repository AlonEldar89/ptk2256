import React from 'react';
import { Paper, Typography } from '@mui/material';
import BuildingAFloorPlan from './BuildingAFloorPlan';
import BuildingBFloorPlan from './BuildingBFloorPlan';
import BuildingCFloorPlan from './BuildingCFloorPlan';
import BuildingDFloorPlan from './BuildingDFloorPlan';

interface FloorPlanViewerProps {
  building: string;
  onApartmentSelect: (apartment: string) => void;
  selectedApartment: string | null;
}

const FloorPlanViewer: React.FC<FloorPlanViewerProps> = ({
  building,
  onApartmentSelect,
  selectedApartment,
}) => {
  const renderFloorPlan = () => {
    switch (building) {
      case 'A':
        return (
          <BuildingAFloorPlan
            onApartmentClick={onApartmentSelect}
            selectedApartment={selectedApartment}
          />
        );
      case 'B':
        return (
          <BuildingBFloorPlan
            onApartmentClick={onApartmentSelect}
            selectedApartment={selectedApartment}
          />
        );
      case 'C':
        return (
          <BuildingCFloorPlan
            onApartmentClick={onApartmentSelect}
            selectedApartment={selectedApartment}
          />
        );
      case 'D':
        return (
          <BuildingDFloorPlan
            onApartmentClick={onApartmentSelect}
            selectedApartment={selectedApartment}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        בניין {building} דירות
      </Typography>
      {renderFloorPlan()}
    </Paper>
  );
};

export default FloorPlanViewer; 