export type Theme = 'light' | 'dark';

export const themeConfig = {
  light: {
    background: '#FFFFFF',
    foreground: '#000000',
    muted: '#666666',
    border: '#E5E5E5',
    surface: '#F7F7F7',
    hover: {
      opacity: 0.7
    }
  },
  dark: {
    background: '#121212',
    foreground: '#FFFFFF',
    muted: '#999999',
    border: '#2A2A2A',
    surface: '#1A1A1A',
    hover: {
      opacity: 0.7
    }
  }
}; 