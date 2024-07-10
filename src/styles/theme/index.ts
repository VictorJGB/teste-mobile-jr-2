const Theme = {
  colors: {
    background: '#FFFFFF',
    backgroundIce: '#F9F9F9',
    grey: '#CABDFF',
    black: '#1A1D1F',
    primary: {
      background: '#6759FF',
      textColor: '#FFFFFF',
    },
    secondary: {
      background: '#FFBC99',
      textColor: '#1A1D1F',
    },
    accent: {
      background: '#FB9450',
      textColor: '#FFFFFF',
    },
    tabButton: {
      selected: {
        background: '#6759FF1A',
        textColor: '#6759FF',
      },
      unselected: {
        background: '#FFFFFF',
        textColor: '#535763',
      },
    },
    input: {
      border: '#F2F2F2',
      background: '#FBFBFB',
      placeholder: '#9B9E9F',
      textColor: '#9B9E9F',
    },
  },
  fonts: {
    fontFamily: {
      regular: 'Inter_400Regular',
      medium: 'Inter_500Medium',
      semibold: 'Inter_600SemiBold',
      bold: 'Inter_700Bold',
    },
    sizes: {
      xs: 10,
      sm: 12,
      base: 14,
      lg: 16,
      'heading-3': 18,
      'heading-2': 20,
      'heading-1': 24,
    },
  },
  shadows: {
    base: {
      offset: {
        width: 0,
        height: 4,
      },
      blur: 8,
      spread: -4,
      color: '#000',
      opacity: 0.1,
    },
  },
}

export default Theme
