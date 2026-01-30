module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        gray: {
          'talento-back': '#F9FAFD', //background
          'gray': '#797E8C', //text 1
          'grayl': '#EAECEF', //text and divide //background 0
          'grayt': '#929BAA', // text 2
          'silver': '#ecebff', //background, text
          'gproduct': '#969696d4', //background
          'gprofile': '#c7c7c7',
          'formC':{
            'd': '#F6F8FA',
            'h': '#F0F2F5',
            'c': '#7E8299'
          },
          'input': '#EEF3F7',
          'input-h': '#EEF2F8',
          'input-p': '#A1A5B7',
          'input-c': '#5E6278',
          'formC':{
            'd': '#F5F8FA',
            'h': '#F0F2F5',
            'c': '#7E8299'
          },
          'input': '#EEF3F7',
          'input-h': '#EEF2F8',
          'input-p': '#A1A5B7',
          'input-c': '#5E6278',
          'card-cal': '#7D8AB6',
          'headerTable': '#E7EAF3B2',
          'headerText':'#F8FAFDF',
          'border': '#E8E9F2',
          'boton': '#A9AFBD',
          'label': '#818A91',
          'trayectoria': '#B9B9B9',
          'button-table': '#677788',
          'button-c-table': '#67778833',
          'button-check': '#CACCD1',
          'button-check-t': '#1E2022',
          'baja': '#67778833',
          'baja-t': '#677788',
          'onboarding-estado': '#F1F1F1',
          'onboarding-estado-t': '#B5B5B5',
        },
        black: {
          blackt: '#252A2E', // text
          'nom-card': '#222222',
          darkness: '#000000',
          number: '#3F4254',
          trayectoria: '#171717',
        },
        blue: {
          'bluelabel': '#2740A9', //text
          'tahiti': '#3ab7bf', //background
          'midnight': '#121063', // background
          blueb: '#2042AE', //background
          'tw-glass-logo': '#020059', //text
          'bproduct': '#3B82F6', //background
          'bpro-hover': '#2A67CC',//hover background
          'light': '#A3C7FB',
          'bprofile': '#263FA9',
          'bprofile-hover': '#2c4bd4',
          'bcard': '#4E46B5',
          'bcard-t': '#8B86DF',
          'cardblue': '#F3F3FF',
          'cardbluelight': '#F5F2FF',
          'cardDash' : "#BFEBFF" ,
          'iconDash' : "#008CCC",
          'formA':{
            'd': '#3E97FF',
            'h': '#3B82F6',
            'a': '#3B82F6',
            'di': '#EEF2F8'
          },
          'title': '#020059',
          'nom-title': '#2F49D1',
          'link': '#4A7BF7',
          'talento': '#1F2949',
          'text': '#2F49D1',
          'templateB': '#377DFF',
          'tab-title': '#2F49D1',
          'badge-headcount': '#09A5BE26',
          'badge-h-t': '#09A5BE',
          'button-check-h': '#EFF6FE',
          'button-check-h-t': '#3E97FF',
          'baja-t': '#377DFF',
          'onboarding-estado': '#C8F1F4',
          'onboarding-estado-t': '#40B4BD',
          'on-tipo': '#D5F2FF',
          'on-tipo-t': '#2D7B9E',
        },
        red: {
          'template-back': '#FFF5F8',
          'template-t': '#F1416C',
          'cardred' : '#FFECD9',
          'cardredlight' : '#FDF5E3',
          'cardDash' : "#FDEEF29" ,
          'iconDash' : "#DB6262",
          'onboarding-estado': '#FFCDB699',
          'onboarding-estado-t': '#FE6620',
          'button-baja': '#FFF5F8',
          'button-baja-t': '#F1416C'
        },
        green: {
          'template-back': '#E8FFF3',
          'template-t': '#50CD89',
          'card-nom': '#DDF8EF',
          'cardDash' : "#DCFCE7" ,
          'iconDash' : "#16A34A",
          'onboarding-estado': '#C9F4D4',
          'onboarding-estado-t': '#2F9D4C',
        },
        yellow: {
          'template-back': '#FFF8DD',
          'template-t': '#FFC700',
          'badge-o': '#FFF4E4',
          'badge-o-t': '#FFB648',
        },
        orange:{
          'cardDash' : "#FFDCCC" ,
          'iconDash' : "#FE6620",
        },
        purple: {
          'cardDash' : "#F3E8FF" ,
          'iconDash' : "#7E22CE",
          'badge-v': '#F8E1FE',
          'badge-v-t': '#9620A0',
          'badge-c': '#6366F11A',
          'badge-c-t': '#6366F1',
          'off-tipo': '#F3E8FF',
          'off-tipo-t': '#7E22CE',
        },
        other: {
          'white': '#ffffff', //text, background
          'purple': '#2740A9', // background
          'metal': '#565584', //background      
          yellow: '#FFE814', //background
          'green': '#00C16E', //text
          'orangelight': '#FFB88B',
        },
        badge: {
          white: '#ffffff',
          gray: '#A2A9BC',
          blue: '#2e9df726',
          purple: '#6a3be426',
          pink: '#ed008c26',
          green: "#DCFCE7",
          skyBlue: "#00C9A71A",
          amber: "#FFEFD4"
        },
        textBadge:{
          gray: '#ffffff',
          blue: '#2E9DF7',
          purple: '#6A3BE4',
          pink: '#ED008C',
          green: "#16A34A",
          skyBlue: "#00C9A7",
          amber: "#FBB034"
        },
        orangetw: '#FD9654', //background
        'orange-button': '#FF8300',
        sky: {
          'checklist-button': '#00BED8'
        }
      },
      spacing: {
        screen: "100vw",
        full: "100%",
        0: "0",
        0.5: "2px",
        1: "4px",
        1.5: "6px",
        2: "8px",
        2.5: "10px",
        3: "12px",
        3.5: "14px",
        4: "16px",
        4.5: "18px",
        5: "20px",
        5.5: "22px",
        6: "24px",
        6.5: "26px",
        7: "28px",
        7.5: "30px",
        8: "32px",
        8.5: "34px",
        9: "36px",
        9.5: "38px",
        10: "40px",
        11: "44px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        24: "96px",
        28: "112px",
        32: "128px",
        36: "144px",
        40: "160px",
        44: "176px",
        48: "192px",
        52: "208px",
        56: "224px",
        60: "240px",
        64: "256px",
        72: "288px",
        80: "320px",
        88: "352px",
        96: "384px",
        97.5: "390px",
        120: "480px",
        150: "600px",
        160: "640px",
        175: "700px",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        roboto: [
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "sans-serif",
        ],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "sans-serif",
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: ["ui-monospace", "Menlo", "Consolas", "monospace"],
        inter: ["Inter"]
      },
      fontSize: {
        0: "0",
        xxs: "11px",
        xs: "12px",
        "2xs": "13px",
        sm: "14px",
        "2sm": "15px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "3.5xl": "32px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
        "7xl": "72px",
        "8xl": "96px",
        "9xl": "128px",
      },
      letterSpacing: (theme) => ({
        ...theme("spacing"),
      }),
      lineHeight: (theme) => ({
        ...theme("spacing"),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
        xs: "160px",
        sm: "192px",
        md: "224px",
        lg: "256px",
        xl: "288px",
        "2xl": "336px",
        "3xl": "384px",
        "4xl": "448px",
        "5xl": "512px",
        "6xl": "576px",
        "7xl": "640px",
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
      minWidth: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [
  ],
}
