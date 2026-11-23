export const colors = {
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  darkNeutral: '#2D3436',
  lightBackground: '#F7F9FA',
  cardBackground: '#FFFFFF',
  textPrimary: '#2D3436',
  textSecondary: '#636E72',
  border: '#E2E8F0',
  error: '#FF7675',
  success: '#55E6C1',
} as const;

export type Colors = typeof colors;