const primaryColor = '#039be5';

export const theme = {
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: primaryColor
    }
  },
  cards: {
    primary: {
      color: '#fff',
      backgroundColor: primaryColor,
      boxShadow:
        '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);',
      borderRadius: '4px'
    }
  },
  colors: {
    primary: primaryColor
  },
  space: [0, 5, 10, 20],
  fontSizes: [12, 16, 24, 32],
  fonts: {
    kalam: `'Kalam',cursive`
  }
};

export const grommetTheme = {
  name: 'Speaky',
  rounding: 24,
  spacing: 28,
  defaultMode: 'light',
  global: {
    colors: {
      brand: {
        dark: '#00BCD4',
        light: '#00E5FF'
      },
      background: {
        dark: '#222222',
        light: '#FAFAFA'
      },
      'background-strong': {
        dark: '#000000',
        light: '#FFFFFF'
      },
      'background-weak': {
        dark: '#444444a0',
        light: '#E8E8E880'
      },
      'background-xweak': {
        dark: '#66666699',
        light: '#CCCCCC90'
      },
      text: {
        dark: '#EEEEEE',
        light: '#000000'
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000'
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444'
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666'
      },
      border: 'background-xweak',
      control: '#000000',
      'active-background': 'background-weak',
      'active-text': 'text-strong',
      'selected-background': 'background-strong',
      'selected-text': 'text-strong',
      'status-critical': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      accent: '#009688',
      focus: 'brand'
    },
    font: {
      family: '"Solway"',
      size: '21px',
      height: '28px',
      maxWidth: '588px',
      face:
        "/* latin */\n@font-face {\n  font-family: 'Solway';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Solway Regular'), local('Solway-Regular'), url(https://fonts.gstatic.com/s/solway/v1/AMOQz46Cs2uTAOCmhXo8sOUcUw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* devanagari */\n@font-face {\n  font-family: 'Kalam';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Kalam'), local('Kalam-Regular'), url(https://fonts.gstatic.com/s/kalam/v10/YA9dr0Wd4kDdMthQOCfhsCkAj7g.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Kalam';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Kalam'), local('Kalam-Regular'), url(https://fonts.gstatic.com/s/kalam/v10/YA9dr0Wd4kDdMthfOCfhsCkAj7g.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Kalam';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Kalam'), local('Kalam-Regular'), url(https://fonts.gstatic.com/s/kalam/v10/YA9dr0Wd4kDdMthROCfhsCkA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
    },
    graph: {
      colors: {
        dark: ['brand'],
        light: ['brand']
      }
    },
    control: {
      border: {
        radius: '24px'
      }
    },
    borderSize: {
      xsmall: '1px',
      small: '2px',
      medium: '4.666666666666667px',
      large: '14px',
      xlarge: '28px'
    },
    breakpoints: {
      small: {
        value: 896,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '4.666666666666667px',
          large: '7px',
          xlarge: '14px'
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '3.5px',
          small: '7px',
          medium: '14px',
          large: '28px',
          xlarge: '56px'
        },
        size: {
          xxsmall: '28px',
          xsmall: '56px',
          small: '112px',
          medium: '224px',
          large: '448px',
          xlarge: '896px',
          full: '100%'
        }
      },
      medium: {
        value: 1792
      },
      large: {}
    },
    edgeSize: {
      none: '0px',
      hair: '1px',
      xxsmall: '3.5px',
      xsmall: '7px',
      small: '14px',
      medium: '28px',
      large: '56px',
      xlarge: '112px',
      responsiveBreakpoint: 'small'
    },
    input: {
      padding: '14px',
      weight: 600
    },
    spacing: '28px',
    size: {
      xxsmall: '56px',
      xsmall: '112px',
      small: '224px',
      medium: '448px',
      large: '896px',
      xlarge: '1344px',
      xxlarge: '1792px',
      full: '100%'
    }
  },
  button: {
    border: {
      width: '2px',
      radius: '21px'
    },
    padding: {
      vertical: '5px',
      horizontal: '26px'
    }
  },
  checkBox: {
    check: {
      radius: '24px'
    },
    toggle: {
      radius: '28px',
      size: '56px'
    },
    size: '28px'
  },
  radioButton: {
    size: '28px'
  },
  calendar: {
    small: {
      fontSize: '16.333333333333332px',
      lineHeight: 1.375,
      daySize: '32px'
    },
    medium: {
      fontSize: '21px',
      lineHeight: 1.45,
      daySize: '64px'
    },
    large: {
      fontSize: '35px',
      lineHeight: 1.11,
      daySize: '128px'
    }
  },
  clock: {
    analog: {
      hour: {
        width: '9.333333333333334px',
        size: '28px'
      },
      minute: {
        width: '4.666666666666667px',
        size: '14px'
      },
      second: {
        width: '3.5px',
        size: '11px'
      },
      size: {
        small: '84px',
        medium: '112px',
        large: '168px',
        xlarge: '252px',
        huge: '336px'
      }
    },
    digital: {
      text: {
        xsmall: {
          size: '11.666666666666666px',
          height: 1.5
        },
        small: {
          size: '16.333333333333332px',
          height: 1.43
        },
        medium: {
          size: '21px',
          height: 1.375
        },
        large: {
          size: '25.666666666666668px',
          height: 1.167
        },
        xlarge: {
          size: '30.333333333333336px',
          height: 1.1875
        },
        xxlarge: {
          size: '39.66666666666667px',
          height: 1.125
        }
      }
    }
  },
  heading: {
    level: {
      '1': {
        small: {
          size: '39.66666666666667px',
          height: '46.66666666666667px',
          maxWidth: '1110.6666666666667px'
        },
        medium: {
          size: '58.333333333333336px',
          height: '65.33333333333334px',
          maxWidth: '1633.3333333333335px'
        },
        large: {
          size: '95.66666666666667px',
          height: '102.66666666666667px',
          maxWidth: '2678.666666666667px'
        },
        xlarge: {
          size: '133px',
          height: '140px',
          maxWidth: '3724px'
        }
      },
      '2': {
        small: {
          size: '30.333333333333336px',
          height: '37.333333333333336px',
          maxWidth: '849.3333333333334px'
        },
        medium: {
          size: '39.66666666666667px',
          height: '46.66666666666667px',
          maxWidth: '1110.6666666666667px'
        },
        large: {
          size: '58.333333333333336px',
          height: '65.33333333333334px',
          maxWidth: '1633.3333333333335px'
        },
        xlarge: {
          size: '77px',
          height: '84px',
          maxWidth: '2156px'
        }
      },
      '3': {
        small: {
          size: '25.666666666666668px',
          height: '32.666666666666664px',
          maxWidth: '718.6666666666667px'
        },
        medium: {
          size: '30.333333333333336px',
          height: '37.333333333333336px',
          maxWidth: '849.3333333333334px'
        },
        large: {
          size: '39.66666666666667px',
          height: '46.66666666666667px',
          maxWidth: '1110.6666666666667px'
        },
        xlarge: {
          size: '49px',
          height: '56px',
          maxWidth: '1372px'
        }
      },
      '4': {
        small: {
          size: '21px',
          height: '28px',
          maxWidth: '588px'
        },
        medium: {
          size: '21px',
          height: '28px',
          maxWidth: '588px'
        },
        large: {
          size: '21px',
          height: '28px',
          maxWidth: '588px'
        },
        xlarge: {
          size: '21px',
          height: '28px',
          maxWidth: '588px'
        }
      },
      '5': {
        small: {
          size: '18.666666666666668px',
          height: '25.666666666666668px',
          maxWidth: '522.6666666666667px'
        },
        medium: {
          size: '18.666666666666668px',
          height: '25.666666666666668px',
          maxWidth: '522.6666666666667px'
        },
        large: {
          size: '18.666666666666668px',
          height: '25.666666666666668px',
          maxWidth: '522.6666666666667px'
        },
        xlarge: {
          size: '18.666666666666668px',
          height: '25.666666666666668px',
          maxWidth: '522.6666666666667px'
        }
      },
      '6': {
        small: {
          size: '16.333333333333332px',
          height: '23.333333333333332px',
          maxWidth: '457.3333333333333px'
        },
        medium: {
          size: '16.333333333333332px',
          height: '23.333333333333332px',
          maxWidth: '457.3333333333333px'
        },
        large: {
          size: '16.333333333333332px',
          height: '23.333333333333332px',
          maxWidth: '457.3333333333333px'
        },
        xlarge: {
          size: '16.333333333333332px',
          height: '23.333333333333332px',
          maxWidth: '457.3333333333333px'
        }
      }
    },
    font: {
      family: '"Kalam"'
    }
  },
  paragraph: {
    small: {
      size: '16.333333333333332px',
      height: '23.333333333333332px',
      maxWidth: '457.3333333333333px'
    },
    medium: {
      size: '21px',
      height: '28px',
      maxWidth: '588px'
    },
    large: {
      size: '25.666666666666668px',
      height: '32.666666666666664px',
      maxWidth: '718.6666666666667px'
    },
    xlarge: {
      size: '30.333333333333336px',
      height: '37.333333333333336px',
      maxWidth: '849.3333333333334px'
    },
    xxlarge: {
      size: '39.66666666666667px',
      height: '46.66666666666667px',
      maxWidth: '1110.6666666666667px'
    }
  },
  text: {
    xsmall: {
      size: '14px',
      height: '21px',
      maxWidth: '392px'
    },
    small: {
      size: '16.333333333333332px',
      height: '23.333333333333332px',
      maxWidth: '457.3333333333333px'
    },
    medium: {
      size: '21px',
      height: '28px',
      maxWidth: '588px'
    },
    large: {
      size: '25.666666666666668px',
      height: '32.666666666666664px',
      maxWidth: '718.6666666666667px'
    },
    xlarge: {
      size: '30.333333333333336px',
      height: '37.333333333333336px',
      maxWidth: '849.3333333333334px'
    },
    xxlarge: {
      size: '39.66666666666667px',
      height: '46.66666666666667px',
      maxWidth: '1110.6666666666667px'
    }
  }
};
