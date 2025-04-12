import React from 'react';
import { Box } from '@mui/material';

interface DummyFloorPlanProps {
  building: string;
  onApartmentClick: (apartment: string) => void;
  selectedApartment: string | null;
}

const DummyFloorPlan: React.FC<DummyFloorPlanProps> = ({
  building,
  onApartmentClick,
  selectedApartment,
}) => {
  // Generate dummy apartment data
  const apartments = Array.from({ length: 6 }, (_, i) => ({
    id: `${building}${i + 1}`,
    x: (i % 3) * 200 + 50,
    y: Math.floor(i / 3) * 150 + 50,
    width: 150,
    height: 100,
    color: selectedApartment === `${building}${i + 1}` ? '#4CAF50' : '#2196F3',
  }));

  return (
    <Box sx={{ 
      width: '100%', 
      height: '400px', 
      position: 'relative',
      backgroundColor: '#f5f5f5',
      borderRadius: 1,
      overflow: 'hidden',
    }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 700 500"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Building outline */}
        <rect
          x="20"
          y="20"
          width="660"
          height="460"
          fill="none"
          stroke="#333"
          strokeWidth="2"
        />
        
        {/* Title */}
        <text
          x="350"
          y="40"
          textAnchor="middle"
          fill="#333"
          fontSize="24"
          fontWeight="bold"
        >
          Building {building} Floor Plan
        </text>

        {/* Apartments */}
        {apartments.map((apt) => (
          <g key={apt.id}>
            <rect
              x={apt.x}
              y={apt.y}
              width={apt.width}
              height={apt.height}
              fill={apt.color}
              stroke="#fff"
              strokeWidth="2"
              style={{ cursor: 'pointer' }}
              onClick={() => onApartmentClick(apt.id)}
            />
            <text
              x={apt.x + apt.width / 2}
              y={apt.y + apt.height / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              fontSize="16"
              fontWeight="bold"
            >
              {apt.id}
            </text>
          </g>
        ))}

        {/* Legend */}
        <g transform="translate(20, 480)">
          <rect x="0" y="0" width="20" height="20" fill="#2196F3" />
          <text x="30" y="15" fill="#333">Available</text>
          <rect x="150" y="0" width="20" height="20" fill="#4CAF50" />
          <text x="180" y="15" fill="#333">Selected</text>
        </g>
      </svg>
    </Box>
  );
};

export default DummyFloorPlan; 