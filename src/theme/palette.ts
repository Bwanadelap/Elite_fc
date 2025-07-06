import { PaletteOptions } from '@mui/material';

export const palette: PaletteOptions = {
  primary: {
    main: '#2E7D32', // Grass green
    light: '#4CAF50',
    dark: '#1B5E20',
  },
  secondary: {
    main: '#FDD835', // Yellow
    light: '#FFEB3B',
    dark: '#F9A825',
  },
  error: {
    main: '#D32F2F', // Red
    light: '#EF5350',
    dark: '#C62828',
  },
  background: {
    default: '#F5F5F5',
    paper: '#FFFFFF',
  },
  success: {
    main: '#388E3C',
    light: '#4CAF50',
    dark: '#2E7D32',
  },
  text: {
    primary: '#263238',
    secondary: '#546E7A',
  },
  // Custom colors for specific features
  custom: {
    pitchGrass: 'linear-gradient(135deg, #2E7D32 0%, #388E3C 100%)',
    cardYellow: '#FDD835',
    cardRed: '#D32F2F',
    eligibleStatus: '#4CAF50',
    ineligibleStatus: '#D32F2F',
    unpaidDues: '#FF9800',
  },
};
