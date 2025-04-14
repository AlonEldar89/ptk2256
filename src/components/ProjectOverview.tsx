import React from 'react';
import { Box, Paper } from '@mui/material';

interface ProjectOverviewProps {
  visible: boolean;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <Paper 
      elevation={3}
      sx={{ 
        p: 2,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderRadius: 1,
          overflow: 'hidden',
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/project/overview.jpg"}
          alt="Project Overview"
          style={{
            width: '100%',
            height: '350px',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Paper>
  );
};

export default ProjectOverview; 